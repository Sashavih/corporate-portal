import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #6b3dc0 30%, #563199 90%)',
  border: 0,
  // width:'8rem',
  margin: "0.6rem auto",
  borderRadius: 5,
  boxShadow: '0 0.5px 2px 2px rgba(107, 61, 192)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


export default function StyledBtn({action, text}) {
  return <MyButton 
  onClick={action}
  type="submit">
    {text}</MyButton>;
}
