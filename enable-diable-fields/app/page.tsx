"use client";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Autocomplete from '@mui/material/Autocomplete';
import Chip from '@mui/material/Chip';

export default function FormPropsTextFields() {
  const [isEditing, setIsEditing] = React.useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };


  const [firstFieldValue, setFirstFieldValue] = React.useState('');
  const [secondFieldValue, setSecondFieldValue] = React.useState('');
  const [thirdFieldValue, setThirdFieldValue] = React.useState('');

  const handleFirstFieldChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setFirstFieldValue(event.target.value);
  };

  const handleSecondFieldChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSecondFieldValue(event.target.value);
  };

  const handleThirdFieldChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setThirdFieldValue(event.target.value);
  };

  const handleChange = () => {
    
     
  };

  return (

    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          height: '100vh',
          margin: 2,
        }}
      >
        <Box
          component="form"
          sx={{
            '&.MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined"
                label="Name"
                value={firstFieldValue}
                onChange={handleFirstFieldChange}
                disabled={!isEditing}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-second"
                label="Address"
                value={secondFieldValue}
                onChange={handleSecondFieldChange}
                disabled={!isEditing} />
            </Grid>

            <Grid item xs={12}>
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                value={thirdFieldValue}
                onChange={handleThirdFieldChange}
                disabled={!isEditing}
              />
            </Grid>

            <Grid item xs={12}>
              <Autocomplete
                multiple
                id="tags-filled"
                disabled={!isEditing}
                freeSolo
                onInputChange={handleChange} // Listen for input changes
                renderTags={(value, getTagProps) => value.map((option, index) => (
                  <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                ))}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="filled"
                    label="Tags"
                    sx={{ width: '25ch' }}
                  />
                )} options={[]} />
            </Grid>
            <Grid item xs={12}>

              <Button variant="contained" disabled={!isEditing}>
                Submit
              </Button>

            </Grid>

          </Grid>

          <Box sx={{
            display: 'flex',
            margin: 2,

          }}>
            <Button variant="contained" onClick={handleEditClick} sx={{
              display: 'flex',
              margin: 2,
            }}>
              Edit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleSaveClick} sx={{
              display: 'flex',
              justifyContent: 'center',
              margin: 2,
            }}>
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </>

  );
}
