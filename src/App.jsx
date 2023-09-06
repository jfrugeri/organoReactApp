import React, { useState } from 'react';
import Banner from './components/Banner';
import Footer from './components/Footer';
import Forms from './components/Forms';
import Time from './components/Time';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [times, setTimes] = useState([
          {
      id: uuidv4(),
      nome: "Back End Developer",
      cor: "#57c278",
    },
    {
      id: uuidv4(),
      nome: "Front End Developer",
      cor: "#82cffa",
    },
    {
      id: uuidv4(),
      nome: "Data Science",
      cor: "#a6d157",
    },
    {
      id: uuidv4(),
      nome: "DevOps",
      cor: "#e06b69",
    },
    {
      id: uuidv4(),
      nome: "UX e Design",
      cor: "#db6ebf",
    },
    {
      id: uuidv4(),
      nome: "Mobile Developer",
      cor: "#ffba05",
    },
    {
      id: uuidv4(),
      nome: "Innovation and Management",
      cor: "#ff8a29",
    },
    ]);

    const [colaboradores, setColaboradores] = useState([]);

    // Remove o colaborador com o userId correspondente da lista de colaboradores.
    const aoDeletarColaborador = (userId) => {
    
        const novaListaColaboradores = colaboradores.filter(colaborador => colaborador.userId !== userId);
        setColaboradores(novaListaColaboradores);
    };

    // Atualize a cor do time com o timeId correspondente.
    const mudarCorDoTime = (cor, timeId) => {

        setTimes(times.map(time => {
            if (time.id === timeId) {
                time.cor = cor;
            }
            return time;
        }));
    };

    const aoNovoColaboradorAdicionado = (colaborador) => {
        setColaboradores([...colaboradores, colaborador]);
    };

    return (
        <div className="App">
            <Banner />
            <Forms times={times.map(time => time.nome)} aoNovoColaborador={aoNovoColaboradorAdicionado} />
            {times.map(time => (
                <Time
                    key={time.id}
                    timeId={time.id}
                    nome={time.nome}
                    cor={time.cor}
                    colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
                    aoDeletar={aoDeletarColaborador}
                    mudarCor={mudarCorDoTime}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;