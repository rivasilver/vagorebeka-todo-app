import './App.css';

function App() {
  const teendok = [];
  const teendoLista = [];
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
      </section>
      <section>
        <h2>Teendők</h2>
        {teendoLista}
      </section>
    </main>
  );
}

export default App;
