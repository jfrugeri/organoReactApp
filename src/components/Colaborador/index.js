import './Colaborador.css';

const Colaborador = (props) => { 

    return (
        <div className='colaborador' >
            <div className='cabecalho' style={{backgroundColor: props.corPrimaria}} >
            <img src={`https://github.com/${props.imagem}.png`} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador;