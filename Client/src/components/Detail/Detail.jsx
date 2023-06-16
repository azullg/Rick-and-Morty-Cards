import React, { useState, useEffect } from "react";
import Style from "./Detail.module.css";
import { useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  const navigate = useNavigate('/home')
  function BOtonnavegar(){
    navigate('/home')

}


  return (
    <div className={Style.conteiner}>
    <div className={Style.conteinerdatosgeneral}>
      <div>
        <img className={Style.img} src={character.image} alt="" />
      </div>
      <div className={Style.conteinerDatos}>
        <h1 className={Style.h1}>{character.name}</h1>
        <p className={Style.p}><strong> Source name:</strong> {character.origin?.name}</p>
        <p className={Style.p}> <strong>Species:</strong> {character.species}</p>
        <p className={Style.p}> <strong>Status:</strong> {character.status}</p>
        <p className={Style.p}><strong>Gender:</strong> {character.gender}</p>
        <p className={Style.p}><strong>Created:</strong> {character.created}</p>
      </div> 
    </div>
        
    <div className={Style.conteinerbotton}>
      <button className={Style.botton} onClick={BOtonnavegar}> BACK</button>
      <button className={Style.botton}>ANADIR A FAVORITOS</button>
    </div>
  
  
  </div>
  );
};

export default Detail;
