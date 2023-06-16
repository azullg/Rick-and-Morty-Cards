import Style from './About.module.css'
import logo from '../../images/LOGIN-05.png'

import uno from '../../images/Captura de pantalla 2023-05-28 225843.png'
import dos from '../../images/Captura de pantalla 2023-05-28 225913.png'
import tres from '../../images/Captura de pantalla 2023-05-28 225929.png'
import { NavLink } from 'react-router-dom';

const About =()=>{
  return(
      <div className={Style.Conteniner}>
          <div className={Style.About}>
              <img src={logo} className={Style.titulo} />
              <div className={Style.parrafo}>
              <p>Colecciona diferentes cartas de personajes sobre serie de Rick and Morty</p>
              <p>Selecciona tu favoritos entre el id 1 y el, descubre nuevos personajes y también puedes añadir un personaje random </p>
              </div>
          <NavLink to='/home' className={Style.botton}>JUGAR</NavLink>
      
          </div>
          <div className={Style.contenteinerimg}>
              <img src={uno} alt="x" className={Style.imgen} />
              <img src={tres} alt="x" className={Style.imgen}  />
              <img src={dos} alt="x" className={Style.imgen} />
          </div>
    
              
      </div>
      )
  }

export default About;
