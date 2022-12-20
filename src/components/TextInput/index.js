import { useState } from 'react'
import './TextInput.css'






const TextInput = (props) => {


        const writing = (event) =>{
                props.onChange(event.target.value)
    
        }

        
        return (
                <div className="TextInput">
                        <label>
                                {props.label}
                        </label>
                        <input value ={props.value} onChange={writing} placeholder={props.placeholder}/>
                </div>
        )




  
 


}


export default TextInput