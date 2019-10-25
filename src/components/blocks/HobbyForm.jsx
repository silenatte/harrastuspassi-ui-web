import React from 'react';
import { useSelector } from 'react-redux';
import { FormControl, TextField, Button, Grid, Select, InputLabel, MenuItem, Box, Input, Chip } from '@material-ui/core';
import { Link } from 'react-router-dom';

const HobbyForm = ({ cancelUrl, submitHandler }) => {

  const [selectValue, setSelectValue] = React.useState([]);
  const categoryState = useSelector(state => state.categories);
  const categoryListItems = categoryState.categories.map((category, index) => (
    <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
  ));

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
      <FormControl fullWidth>
        <InputLabel htmlFor="select-multiple-chip">Chip</InputLabel>
        <Select
          multiple
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
          input={<Input id="select-multiple-chip" />}
          inputProps={{
            name: 'category',
            id: 'category-simple',
          }}
          renderValue={selected => (
            <div>
              {selected.map(value => (
                <Chip key={value} label={categoryState.categories.find((o) => o.id === value).name} />
              ))}
            </div>
          )}
        >
          {categoryListItems}
        </Select>
      </FormControl>
      <Box mt={3}>
        <Grid container justify="flex-end" >
          <Grid item>
            <Button component={Link} to={cancelUrl}>
              Cancel
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Save
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default HobbyForm;
