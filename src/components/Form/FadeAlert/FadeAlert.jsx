import * as React from 'react';
import Alert from '@mui/material/Alert';

const FadeAlert=() =>{
  
  return (
    <Alert
    sx={{ width: '50%',  margin:'1rem auto;',color:'#90e093' }}
     severity="success"
     variant="outlined">Сообщение отправлено!</Alert>
  );
}
export default FadeAlert;