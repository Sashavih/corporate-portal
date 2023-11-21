import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './MultilineTextFields.scss';

export default function MultilineTextFields({name, setName}) {
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };
  return (
    <Box
      component="text"
      sx={{
        '& .MuiTextField-root': { m: '0.5rem auto'  , width: '25rem' },
      }}
      // noValidate
      autoComplete="off">
        <TextField
         required
          id="outlined-multiline-flexible"
          label="Причина"
          margin="normal"
          multiline
          maxRows={0}
          onChange={handleChange}
        />
    </Box>
  );
}