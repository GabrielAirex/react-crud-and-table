import './Form.css'
import Button from "../Button"
import { useState } from "react"
import { FormControl, FormControlLabel, FormGroup, FormLabel, InputLabel, MenuItem, Radio, RadioGroup, Select, Switch, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Form = (props) => {

  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [doc, setDoc] = useState('')
  const [CPF, setCPF] = useState('')
  const [phone, setPhone] = useState('')
  const [gender, setGender] = useState('')
  const [salary, setSalary] = useState('')
  const [seniority, setSeniority] = useState('')
  const [cargo, setCargo] = useState('')
  const [date_born, setDate] = useState('')
  const [marital, setMarital] = useState('')
  const [Indicated, setIndicated] = useState(false)


  const putData = (event) => {
    event.preventDefault()

    //console.log(name, lastName, email, doc, CPF, phone, cargo, salary, seniority, gender, marital, date_born, Indicated)


    const upload = {
      name:name,
      lastname:lastName,
      email:email,
      doc:doc,
      cpf:CPF,
      phone:phone,
      role:cargo,
      salary:salary,
      seniority:seniority,
      gender:gender,
      marital:marital,
      date_born:date_born,
      indicated:Indicated
    }

    console.log(upload)
    props.onRegister(

      {
        role: cargo,
        cpf: CPF,
        gender: gender,
        name: name,
        seniority: seniority
      }
    )

  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handleDoc(e) {
    setDoc(e.target.value);
  }
  function handleCPF(e) {
    setCPF(e.target.value)
  }
  function handlePhone(e) {
    setPhone(e.target.value)
  }
  function handleCargo(e) {
    setCargo(e.target.value)
  }
  function handleSalary(e) {
    setSalary(e.target.value)
  }
  function handleSeniority(e) {
    setSeniority(e.target.value)
  }
  function handleGender(e) {
    setGender(e.target.value)
  }
  function handleMarital(e) {
    setMarital(e.target.value)
  }
  function handleIndicated(e) {

    setIndicated(e.target.checked);
  }



  return (



    <section className="Form">

      <form onSubmit={putData}>
        <div className='fst_block'>
          <TextField
            helperText="Please enter the first name"
            label="First Name"
            value={name}
            onChange={handleName}
          />

          <TextField
            helperText="Please enter the first name"
            label="Last Name"
            value={lastName}
            onChange={handleLastName}
          />


          <TextField
            helperText="Please enter the email"
            label="Email"
            value={email}
            onChange={handleEmail}
          />
        </div>

        <div className='scd_block'>

          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel >Document</InputLabel>
            <Select
              value={doc}
              onChange={handleDoc}
              autoWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"CPF"}>CPF</MenuItem>
              <MenuItem value={"RG"}> RG</MenuItem>
              <MenuItem value={"Passport"}>Passport</MenuItem>
            </Select>
          </FormControl>
          <TextField
            helperText="Please enter CPF"
            label="CPF"
            value={CPF}
            onChange={handleCPF} />


          <TextField
            helperText="Please enter the phone"
            label="Phone"
            value={phone}
            onChange={handlePhone}
          />

        </div>


        <div className='trd_block'>
          <TextField
            helperText="Please enter role"
            label="Role"
            value={cargo}
            onChange={handleCargo} />


          <TextField
            helperText="Please enter salary"
            label="Salary"
            value={salary}
            onChange={handleSalary} />

          <FormControl sx={{ minWidth: 220 }}>
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


        </div>

        <div className='frt_block'>

          <FormControl>
            <FormLabel sx={{ fontSize: 20, padding: 0, marginRight: 2 }}>Gender</FormLabel>
            <RadioGroup sx={{ width: 220 }}
              row
              value={gender}
              onChange={handleGender}
            >
              <FormControlLabel sx={{ padding: 0, marginRight: 2 }} value="Female" control={<Radio sx={{ padding: 0 }} size="small" />} label="Female" />
              <FormControlLabel sx={{ padding: 0, marginRight: 2 }} value="Male" control={<Radio sx={{ padding: 0 }} size="small" />} label="Male" />
              <FormControlLabel sx={{ padding: 0 }} value="Other" control={<Radio sx={{ padding: 0 }} size="small" />} label="Other" />
            </RadioGroup>
          </FormControl>

          <FormControl sx={{ minWidth: 220 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Marital Status</InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={marital}
              onChange={handleMarital}
              autoWidth
              label="Age"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Single"}>Single</MenuItem>
              <MenuItem value={"Married"}> Married</MenuItem>
              <MenuItem value={"Divorced "}>Divorced </MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider className="time" dateAdapter={AdapterDayjs}>
            <DatePicker
              className='time'
              label="birth date"
              value={date_born}
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>



        </div>


        <div className='last'>
          <FormGroup>
            <FormControlLabel

              control={
                <Switch
                  checked={Indicated}
                  onChange={handleIndicated}

                />
              }
              label="Indicated"

            />
          </FormGroup>
          <Button>Register</Button>

        </div>










      </form>
    </section>

  )


}

export default Form