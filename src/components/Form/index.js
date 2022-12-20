import TextInput from "../TextInput"
import DropDown from "../DropDown"
import './Form.css'

const Form = () => {
    const itens =['teste',
    'teste2']
return( 

   

    <section className="Form">
        <form>
            <TextInput label='Nome' placeholder="Digite o nome do colaborador" />
            <TextInput label='Cargo' placeholder="Digite o cargo do colaborador" />
            <DropDown label ='Genero' itens={itens}/>
        </form>
    </section>

)


}

export default Form