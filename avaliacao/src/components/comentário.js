import imagem from './img/moda.avif';
import './App.css';
import ProfileImage from './components/ProfileImage';


function App() {
  return (
    <div className="App">
      <h1> Kirnews Moda </h1>
      <h2>Olá vem descobrir um pouco mais de moda.</h2>
      <h2>Name:{props.Name}</h2>
      <h2>Comentário: {props.Comentário}</h2>

    </div>
  );
}