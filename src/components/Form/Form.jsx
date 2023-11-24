import BasicDateTimePicker from "./BasicDateTimePecker/BasicDateTimePicker";
import MultilineTextFields from "./MultilineTextFields/MultilineTextFields";
import BasicSelect from "./BasicSelect/BasicSelect";
import StyledBtn from "../StyledBtn/StyledBtn";
import { Box } from "@mui/material";
import dayjs from 'dayjs';
import { useState,useRef } from "react";
import emailjs from '@emailjs/browser';


const Form=() => {
  const form = useRef();
  const [dataValue, setDataValue] =useState(dayjs());
  const [value, setValue]= useState('');
  const [reason, setReason]= useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Форма отправлена");
    emailjs.sendForm('service_sfjqnft', 'template_wqid46m', form.current, 'iL1ykgQcxewUhSspn')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    setDataValue(dayjs());
    setReason('');
    setValue('');
}  

  return(
    <Box sx={{ width: '25rem',margin: 'auto' }}>
<form ref={form} onSubmit={handleSubmit}>
          <BasicDateTimePicker value={dataValue} setValue={setDataValue} />
          <BasicSelect name={value} setName={setValue} />
          <MultilineTextFields reason={reason} setReason={setReason} />
         <StyledBtn
           text={'ОТПРАВИТЬ'} />
            {/* <p name="user_name" >Alexandra</p>
      <p name="user_email" >{value}</p>
      <p name="message" >{value}{reason}</p> */}
           </form>
           </Box>
  )
}
export default Form;
