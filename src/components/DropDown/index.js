import './DropDown.css'

const DropDown = (props) =>{

    const select = (event) =>{
        props.onChange(event.target.value)

        }

    return(
        
  
        
        <div className='DropDown'>
            <label>{props.label}</label>


            <select onChange = {select} value = {props.value}>
                {props.itens.map(item => <option key ={item}>{item}</option>)}
            </select>
        </div>
    )
}


export default DropDown