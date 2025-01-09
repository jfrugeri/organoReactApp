import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserMinus } from '@fortawesome/free-solid-svg-icons';
import './Colaborador.css';

const Colaborador = (props) => { 

/*     const handleDeletarColaborador = () => {
        props.aoDeletar(props.userId);
    }; */

    return (
        <div className='colaborador'>
            <FontAwesomeIcon 
                size={"lg"}
                icon={faUserMinus}
                className="deletarUser"
                onClick={() => props.aoDeletar(props.userId)}
            />
            <div className='cabecalho' style={{backgroundColor: props.cor}}>
                <img src={`https://github.com/${props.imagem}.png`} alt={props.nome} />
            </div>
            <div className='rodape'>
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>
        </div>
    );
}

export default Colaborador;
