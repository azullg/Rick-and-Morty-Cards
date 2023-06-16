import { useState } from "react";
import Style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;

  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
  
 
     <div className={Style.conteiner}>
         <div>
      <input className={Style.Input} type='' onChange={handleChange}/>
      <button className={Style.button}  onClick={() => {onSearch(id)}}>AGREGAR</button>
      </div>
      <button className={Style.button}>CREATE RANDOM</button>
      <button className={Style.button}>CLEAR</button>
      </div>
     );
}
