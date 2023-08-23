import './TextArea.css'

const TextArea = (props) => {
    
    const placeholderModificada = `${props.placeholder}...`
    
    // let valor = 'Guilherme Silveira'

    const quandoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }
    
    return (
        <div className="text-area">
            <label> {props.label}</label>
            <input value={props.valor} onChange={quandoDigitado} required={props.required} placeholder={placeholderModificada}/>
        </div>
    )
}

export default TextArea;