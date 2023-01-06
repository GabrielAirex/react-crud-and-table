import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ColorToggleButton(props) {
  const [alignment, setAlignment] = React.useState('Genero');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);

    props.onToggle(newAlignment)
  };

  return (
    <ToggleButtonGroup
      color="primary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
    >
      <ToggleButton value="Genero">Genero</ToggleButton>
      <ToggleButton value="Senioridade">Senioridade</ToggleButton>
    </ToggleButtonGroup>
  );
}