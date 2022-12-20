import TextInput from "../TextInput"
import DropDown from "../DropDown"
import './Form.css'
import Button from "../Button"
import { useState } from "react"

const Form = (props) => {
    const itens =['teste',
    'teste2']

    const senioridade = ['junior',
'pleno',
'senior']


    const [name,setName] = useState('')
    const [cargo,setCargo] = useState('')
    const [CPF,setCPF] = useState('')
    const [gender,setGender] = useState('')
    


    const putData = (event) =>{
            event.preventDefault()
            props.onRegister(

                {
                name : name,
                cargo : cargo,
                cpf :CPF,
                gender :gender
            }
            )
           
    }


return( 

   

    <section className="Form">

        <form onSubmit={putData}>
            <TextInput 
            value ={name}
            onChange={name =>setName(name)}
            label='Nome' 
            placeholder="Digite o nome do colaborador" />

            <TextInput 
            value ={CPF}
            onChange={CPF =>setCPF(CPF)}
            label='CPF'
            placeholder="Digite o CPF do colaborador" />

            <TextInput 
            value ={cargo}
            onChange={cargo =>setCargo(cargo)}
            label='Cargo'
            placeholder="Digite o cargo do colaborador" />


            <DropDown 
            value={gender}
            onChange ={gender => setGender(gender)}
            label ='Genero'
            itens={itens}
             />

            <DropDown 
            value={gender}
            onChange ={gender => setGender(gender)}
            label ='Senioridade'
            itens={senioridade}
             />


            <Button>Register</Button>
        </form>
    </section>

)


}

export default Form