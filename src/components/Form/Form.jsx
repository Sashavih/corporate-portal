import StyledBtn from "../StyledBtn/StyledBtn";
import {Box } from "@mui/material";
import dayjs from 'dayjs';
import { useState} from "react";
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from '@mui/material/Select';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import FadeAlert from "./FadeAlert/FadeAlert";
import sendEmail from "../../utils/sendEmail";
import './Form.scss';


const Form=() => {
  const [dataValue, setDataValue] =useState(dayjs());
  const [pressed, setPressed] = useState(false);
  const { handleSubmit, control, reset} = useForm();

const onSubmit = (data) => {
sendEmail(data);
  setPressed(true);
  setDataValue(dayjs());
  setTimeout(() => {
    setPressed(false);
   }, 3000);
  reset();
};

  return(
    <Box sx={{ width: '25rem',margin: 'auto' }}>
       <h2 className="form-title">внутренние командировки</h2>
<form onSubmit={handleSubmit(onSubmit)}>
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DemoContainer components={['DatePicker']}
     sx={{
      '& .MuiTextField-root': {  width: '25rem' },
    }} >
<Controller
        name="date"
        control={control}
        defaultValue={dayjs()}
        render={({ field: { onChange, value } }) => (
          <DatePicker 
     required
     views={['year', 'month', 'day']}
      label="Дата пропуска"
      value={dataValue}
       format="DD/MM/YYYY"
      onChange={onChange}
       />
        )}
      />
        </DemoContainer>
      </LocalizationProvider>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Руководитель</InputLabel>
      <Controller
        name="mail"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value }}) => (
          <Select
          required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={value}
            label="Руководитель"
            onChange={onChange}>
            <MenuItem value={'sashavikhorevaa@gmail.com'}>Антон Конов</MenuItem>
            <MenuItem value={'avyogaonline@gmail.com'}>Кто то еще</MenuItem>
            <MenuItem value={'sashamaninaa@mail.ru'}>Кто то еще</MenuItem>
          </Select>
        )}
      />
       </FormControl>
       <Box
      component="text"
      sx={{
        '& .MuiTextField-root': { m: '0.5rem auto'  , width: '25rem' },
      }}
      autoComplete="off">
      <Controller
        name="days"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextField
          required
           id="outlined-basic"
           label="Количество дней" 
           variant="outlined"
           onChange={onChange}
           value={value.replace(/\D/g, '')}
           multiline
         />
        )}
    /></Box>
        <Box
      component="text"
      sx={{
        '& .MuiTextField-root': { m: '0.5rem auto'  , width: '25rem' },
      }}
      autoComplete="off">
      <Controller
        name="reason"
        control={control}
        defaultValue=""
        render={({ field: { onChange, value } }) => (
          <TextField
          required
           id="outlined-multiline-flexible"
           label="Причина"
           margin="normal"
           multiline
           value={value}
           maxRows={0}
           onChange={onChange}
         />
        )}
    />
    </Box>
      <StyledBtn
           text={'ОТПРАВИТЬ'} />
           </form>
           {pressed && <FadeAlert/>}
           </Box>
  )
}
export default Form;
