import { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation";
import logo from '../../images/LOGIN-05.png'
import log from '../../images/LOGIN-11.png'
const Form = (props) => {
  const { login } = props;
  const [userData, setUserData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (<div className={style.constainergeneral}>


        <div>
            <img src={logo} alt="" className={style.logo}/>
        </div>
  

    
      <form onSubmit={handleSubmit} className={style.conteinerform}>

      <img src={log} alt=""  className={style.login} />
         
        {/* USERNAME */}
        <div>
        
        <input className={style.inputstyle}
          type="text"
          placeholder="Email..."
          name="email"
          onChange={handleChange}
          value={userData.email}
        /></div>
        {errors.e1 ? (
          <p className={style.errors}>{errors.e1}</p>
        ) : errors.e2 ? (
          <p className={style.errors}>{errors.e2}</p>
        ) : (
          <p className={style.errors}>{errors.e3}</p>
        )}
        <div>
        {/* PASSWORD */}
        
        <input className={style.inputstyle}
          type="password"
          placeholder="Password..."
          name="password"
          onChange={handleChange}
          value={userData.password}
        /></div>
        {errors.p1 ? <p className={style.errors}>{errors.p1}</p> : <p className={style.errors}>{errors.p2}</p>}
        <button className={style.button}>PUSH</button>
        <div className={style.parrafo}>
            <p>¿olvidaste tu contraseña?</p>
            <p className={style.terminos}>Terminos y condiciones</p>
        </div>
      </form>
    </div>
  );
};

export default Form;
