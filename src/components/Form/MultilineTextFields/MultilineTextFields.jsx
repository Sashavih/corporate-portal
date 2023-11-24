import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './MultilineTextFields.scss';

export default function MultilineTextFields({reason, setReason}) {
  const handleChange = (event) => {
    setReason(event.target.value);
    console.log(reason) //reason
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
          value={reason}
          maxRows={0}
          onChange={handleChange}
        />
    </Box>
  );
}