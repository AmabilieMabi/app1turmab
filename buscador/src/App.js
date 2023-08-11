import { AiFillAudio } from "react-icons/ai";
function App() {
  return (
    <div className="container">
      <h1 className="title" >  Buscador de cep </h1>
      <div className="containerInput"> 
      <input type="text" placeholder="digite aqui..." /> 
      <button className="buttonSearch">
        
      <AiFillAudio size={22} color="#fff"/> 
       </button>
      </div>
    </div>
  );
}

export default App;
