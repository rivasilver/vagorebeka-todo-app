import { useState } from 'react';
import './App.css';

function App() {
  const [teendok, setTeendok] = useState([]);
  const [teendo, setTeendo] = useState("");
  const teendoLista = [];

  const teendoHozzaadasa = ()=>{
    let teendoHossz = teendo.length;
    if (teendoHossz === 0){
      alert("Nem lett feladat megadva!")
    }
    else if (teendok.includes(teendo)){
      alert("A feladat már szerepel a listában!")
    }
    else{
      const ujTeendok = [];
      teendok.forEach(teendo=>ujTeendok.push(teendo));
      ujTeendok.push(teendo);
      setTeendok(ujTeendok);
      setTeendo("");
    }
  }

  teendok.forEach(teendo=>{
    teendoLista.push(<div>
      <p><input type="checkbox"/>{teendo}</p>
    </div>)
  })

  return (
    <main>
      <h1>Teendők</h1>
      <section>
        <h2>Feladat hozzáadása</h2>
        <label for="input">Feladat:</label><br/>
        <input id="input" type="text" placeholder="Feladat" value={teendo} onInput={e=>setTeendo(e.target.value)}/><br/>
        <button onClick={()=>teendoHozzaadasa()}>Hozzáad</button>
      </section>
      <section>
        <h2>Teendők</h2>
        {teendoLista}
      </section>
    </main>
  ); 
}

export default App;
