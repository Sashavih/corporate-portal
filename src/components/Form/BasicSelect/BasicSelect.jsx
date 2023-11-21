import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../BasicDateTimePecker/BasicDateTimePicker.scss';
import './BasicSelect.scss';

export default function BasicSelect() {
  const [name, setName] = React.useState('');
  const handleChange = (event) => {
    setName(event.target.value);
    console.log(event.target.value)
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Руководитель</InputLabel>
        <Select
        required
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={name}
          label="Руководитель"
          onChange={handleChange}>
          <MenuItem value={1}>Антон Конов</MenuItem>
          <MenuItem value={2}>Кто то еще</MenuItem>
          <MenuItem value={3}>Кто то еще</MenuItem>
        </Select>
      </FormControl>
  );
}