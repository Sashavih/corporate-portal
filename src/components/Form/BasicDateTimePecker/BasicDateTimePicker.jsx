import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import './BasicDateTimePicker.scss';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function BasicDateTimePicker({value, setValue}) {
  const handleChange = (newValue) => {
    setValue(newValue)
    console.log(value.$d)
  };

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <DemoContainer components={['DateTimePicker']} >
    //     <DateTimePicker 
    //    required
    //     label="Выберите дату и время"
    //     value={value}
    //      format="DD/MM/YYYY hh:mm a"
    //     error="заполните поле"
    //     onChange={handleChange}
    //     />
    //   </DemoContainer>
    // </LocalizationProvider>
    
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <DemoContainer components={['DatePicker']}
     sx={{
      '& .MuiTextField-root': {  width: '25rem' },
    }} >
      <DatePicker 
     required
      label="Выберите дату"
      value={value}
       format="DD/MM/YYYY"
      error="заполните поле"
      onChange={handleChange}
       />
    </DemoContainer>
  </LocalizationProvider>
  );
}