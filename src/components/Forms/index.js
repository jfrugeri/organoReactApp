import './Forms.css';
import TextArea from '../TextArea';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';


const Forms = (props) => {

    
    const  [nome, setNome] = useState('')
    const  [cargo, setCargo] = useState('')
    const  [imagem, setImagem] = useState('')
    const  [time, setTime] = useState('')

    
    const savedForms = (evento) => {
        evento.preventDefault()
        props.aoNovoColaborador({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="forms">
            <form onSubmit={savedForms}>
                <h2>Enter the employee's information on the card.</h2>
                <TextArea 
                    required={true} 
                    label="Name" 
                    placeholder="Enter your name"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextArea 
                    required={true} 
                    label="Ocupation" 
                    placeholder="Enter your occupation"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextArea 
                    label="Github Username" 
                    placeholder="Enter your github username"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropdownList 
                    required={true} 
                    label="Squad" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Button>
                    Create Card
                </Button>
            </form>
        </section>
    )

}

export default Forms;