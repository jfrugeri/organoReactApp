import './Forms.css';
import TextArea from '../TextArea';
import DropdownList from '../DropdownList';
import Button from '../Button';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


const Forms = (props) => {

    const  [userId, setUserId] = useState(uuidv4())
    const  [nome, setNome] = useState('')
    const  [cargo, setCargo] = useState('')
    const  [imagem, setImagem] = useState('')
    const  [time, setTime] = useState('')

    
    const savedForms = (evento) => {
        evento.preventDefault()
        props.aoNovoColaborador({
            userId,
            nome,
            cargo,
            imagem,
            time,
        })
        setUserId(uuidv4())
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
        
    }

    return (
        <section className="forms">
            <form onSubmit={savedForms}>
                <h2>Digite as informações do colaborador no card abaixo</h2>
                <TextArea 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite o nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextArea 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextArea 
                    label="Github Username" 
                    placeholder="Digite o usuario do github"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <DropdownList 
                    required={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}

                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )

}

export default Forms;