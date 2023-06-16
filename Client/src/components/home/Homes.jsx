
import style from './Home.module.css'
import SearchBar from "../SearchBar/SearchBar";
import Cards from "../Cards/Cards";


export default function Home (props) {
  const { characters, onClose, onChange,onSearch} = props;
  return (
  <div >
  
  <div className={style.contenedor}> 

          
<div>
 <SearchBar onSearch={onSearch} onChange={onChange}/>
</div>

<div>
  <Cards characters={characters} onClose={onClose}/>
 </div>
 
</div>
    </div>
  
 
  );
}
