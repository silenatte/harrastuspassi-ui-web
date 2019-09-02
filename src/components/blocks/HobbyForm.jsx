import React from 'react';
import { FormControl, TextField, Button, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';

const HobbyForm = ({ cancelUrl, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <FormControl fullWidth>
        <TextField
          id="name"
          required
          label="Name"
          margin="dense"
          variant="outlined"
        />
      </FormControl>
      <FormControl fullWidth>
        <TextField
          id="description"
          label="Description"
          margin="dense"
          variant="outlined"
        />
      </FormControl>
      <Grid container justify="flex-end">
        <Grid item>
          <Button component={Link} to={cancelUrl}>
            Cancel
          </Button>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default HobbyForm;
