import BasicDateTimePicker from "./BasicDateTimePecker/BasicDateTimePicker";
import MultilineTextFields from "./MultilineTextFields/MultilineTextFields";
import BasicSelect from "./BasicSelect/BasicSelect";
import StyledBtn from "../StyledBtn/StyledBtn";
import { Box } from "@mui/material";
import dayjs from 'dayjs';
import { useState } from "react";
import { event } from "jquery";


const Form=() => {
  const [dataValue, setDataValue] =useState(dayjs());
  const [value, setValue]= useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Форма отправлена");
    setDataValue(dayjs());
    event.target.reset();
    // setValue(null);
}  

  return(
    <Box sx={{ width: '25rem',margin: 'auto' }}>
<form onSubmit={handleSubmit}>
          <BasicDateTimePicker value={dataValue} setValue={setDataValue} />
          <MultilineTextFields name={value} setName={setValue} />
          <BasicSelect name={value} setName={setValue} />
         <StyledBtn
           text={'ОТПРАВИТЬ'} />
           </form>
           </Box>
  )
}
export default Form;
