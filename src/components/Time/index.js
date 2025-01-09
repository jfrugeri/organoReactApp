import Colaborador from '../Colaborador';
import './Time.css';
import hexToRgba from 'hex-to-rgba';

const Time = (props) => {
    
    const cssBackground = { backgroundColor: hexToRgba(props.cor, '0.6') } // Alterando Opacidaden da cor de fundo
    const cssBorderColor = { borderColor: props.cor }
    
    return (
        props.colaboradores.length > 0 && <section className="time" style={ cssBackground } > 
        <input onChange={evento => props.mudarCor(evento.target.value, props.timeId)} value={props.cor} type='color' className='input-cor' />
        <h3 style={cssBorderColor }>{props.nome}</h3>
        <div className='colaboradores'>
            {props.colaboradores.map(colaborador => {
                return <Colaborador userId={colaborador.userId} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} cor={props.cor} aoDeletar={props.aoDeletar}/>
            })}
        </div>
    </section>
    )
}

export default Time;