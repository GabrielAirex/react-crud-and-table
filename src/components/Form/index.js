import './Form.css'
import Button from "../Button"
import { useState } from "react"
import { FormControl, FormControlLabel, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Form = (props) => {

    const [name,setName] = useState('')
    const [cargo,setCargo] = useState('')
    const [CPF,setCPF] = useState('')
    const [gender,setGender] = useState('')
    const [seniority,setSeniority] = useState('')
    const [date_born,setDate] = useState('')
    


    const putData = (event) =>{
            event.preventDefault()
            props.onRegister(

                {
                    role : cargo,
                    cpf :CPF,
                    gender :gender,
                name : name,
                seniority : seniority
            }
            )
           
    }

    function handleName(e) {
        setName(e.target.value);
    }
    function handleCPF(e){
        setCPF(e.target.value)
    }
    function handleCargo (e){
        setCargo(e.target.value)
    }
    function handleGender (e){
        setGender(e.target.value)
    }
    function handleSeniority (e){
        setSeniority(e.target.value)
    }


return( 

   

    <section className="Form">

        <form onSubmit={putData}>

        <TextField
        helperText="Please enter name"
        label="Name"
        value={name}
        onChange={handleName}
        />
        <TextField
        helperText="Please enter CPF"
        label="CPF"
        value={CPF}
        onChange={handleCPF}   />
        <TextField
        helperText="Please enter role"
        label="Role"
        value={cargo}
        onChange={handleCargo}   />
           
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        value={gender}
        onChange ={handleGender}
      >
        <FormControlLabel value="Female" control={<Radio />} label="Female" />
        <FormControlLabel value="Male" control={<Radio />} label="Male" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
        </RadioGroup>
        </FormControl>


        <FormControl sx={{ m: 1, minWidth: 80 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Seniority</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={seniority}
          onChange={handleSeniority}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"Junior"}>Junior</MenuItem>
          <MenuItem value={"Pleno"}> Pleno</MenuItem>
          <MenuItem value={"Senior"}>Senior</MenuItem>
        </Select>
      </FormControl>

      <LocalizationProvider dateAdapter={AdapterDayjs}>
  <DatePicker
    label="birth date"
    value={date_born}
    onChange={(newValue) => {
      setDate(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
</LocalizationProvider>


         




            <Button>Register</Button>
        </form>
    </section>

)


}

export default Form