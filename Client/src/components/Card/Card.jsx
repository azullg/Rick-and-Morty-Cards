import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Styles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";



function Card(props) {
  const {
    name,
    id,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    addFav,
    removeFav,
    myFavorites,
  } = props;

  const [isFav, setIsFav] = useState(false);
  const navigate = useNavigate()

  function navigateHander(){
    navigate(`/detail/${id}`)
  }
  


  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav);
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={Styles.conteiner} >   
      <div className={Styles.conteinerTitulo}>
      <p className={Styles.h2card}>{id} - {name}</p>
    </div>
    <div className={Styles.conteinerImg}>
    <button onClick={navigateHander} className={Styles.buttonImg}>
      <img className={Styles.img} src={image} alt="character" />
      </button>
    </div>
    <div className={Styles.bottones}>
         <button className={Styles.buttonTitulo1} onClick={()=>onClose(id)}> x </button>   
   {isFav ? (
          <button className={Styles.buttonTitulo1} onClick={handleFavorite}>❤️</button>
        ) : (
          <button className={Styles.buttonTitulo1} onClick={handleFavorite}>🤍</button>
        )}
         <button className= {Styles.buttonTitulo3} onClick={navigateHander}>+</button>
      </div>

         
     
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
