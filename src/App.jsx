import './App.css';

function App() {
  const teendok = [];
  const teendo = "";
  const teendoLista = [];
  const teendoHozzaadasa = ()=>{

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
        <input id="input" type="text" placeholder="Feladat" value={teendo}/><br/>
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
