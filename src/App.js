import Banner from './components/Banner';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Time from './components/Time';
import { useState } from 'react';

function App() {
  
  const times = [
    {
      nome: "Back End Developer",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9"
    },
    {
      nome: "Front End Developer",
      corPrimaria: "#82cffa",
      corSecundaria: "#e8f8ff"
    },
    {
      nome: "Data Science",
      corPrimaria: "#a6d157",
      corSecundaria: "#f0f8e2"
    },
    {
      nome: "DevOps",
      corPrimaria: "#e06b69",
      corSecundaria: "#fde7e8"
    },
    {
      nome: "UX e Design",
      corPrimaria: "#db6ebf",
      corSecundaria: "#fae9f5"
    },
    {
      nome: "Mobile Developer",
      corPrimaria: "#ffba05",
      corSecundaria: "#fff5d9"
    },
    {
      nome: "Innovation and Management",
      corPrimaria: "#ff8a29",
      corSecundaria: "#ffeedf"
    },
  ]
  
  const [colaboradores, setColaborador] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaborador([...colaboradores, colaborador])
  }
  
  return (
    <div className="App">
        <Banner />
        <Forms times={times.map(time => time.nome)} aoNovoColaborador={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>
        {times.map(time => 
        <Time 
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        <Footer />
    </div>
  );
}

export default App;