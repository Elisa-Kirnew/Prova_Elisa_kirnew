import imagem from './img/moda.avif';
import './App.css';
import ProfileImage from './components/ProfileImage';


function App(props) {
  return (
    <div>
        <img src={props.moda} alt={props.nome}/>
        <p>Aqui você descubrirá os segredos da moda{props.descrição}</p>
        <p>Aqui você descubrirá os segredos da moda{props.categoria}</p>
      
    </div>
  );
}

export default App;
