import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ options, label, setValueMethod }) {
  const defaultOption = options?.length === 1 ? options[0].code : '';
  const [value, setValue] = useState(defaultOption);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    setValueMethod(value);
  }, [value, setValueMethod])

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={`${label}-select-label`}>{label}</InputLabel>
        <Select
          labelId={`${label}-select-label`}
          id={`${label}-select`}
          value={value}
          label="value"
          onChange={handleChange}
        >
          {options?.map((option, index) => <MenuItem value={option.code} key={`option-${index}`}>{option.name}</MenuItem>)}
        </Select>
      </FormControl>
    </Box>
  );
}
