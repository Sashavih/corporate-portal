import React from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';


const MyButton = styled(Button)({
  background: 'linear-gradient(45deg,#4C5DA1 30%,  #5559A0  90%)',
  border: 0,
  margin: "0.6rem auto",
  borderRadius: 5,
  boxShadow: '0 0.5px 1.5px 1.5px rgba(84,85,178)',
  color: 'white',
   height: 40,
  padding: '0 30px',
});


export default function StyledBtn({action, text}) {
  return <MyButton 
  onClick={action}
  type="submit">
    {text}</MyButton>;
}
