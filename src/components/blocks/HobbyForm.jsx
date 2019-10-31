import React from 'react';
import { useSelector } from 'react-redux';
import { FormControl, TextField, Button, Grid, Select, InputLabel, MenuItem, Box, Input, Chip } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import OrganizerModalButton from './OrganizerModalButton'
import LocationModalButton from './LocationModalButton'

const HobbyForm = ({ cancelUrl, submitHandler }) => {
  const [selectValue, setSelectValue] = React.useState([]);
  const [selectedLocation, setSelectedLocation] = React.useState({});
  const [selectedOrganizer, setSelectedOrganizer] = React.useState({});
  const [selectedImage, setSelectedImage] = React.useState();

  const categoryState = useSelector(state => state.categories);
  const organizerState = useSelector(state => state.organizers);
  const locationState = useSelector(state => state.locations);
  const categoryListItems = categoryState.categories.map((category, index) => (
    <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
  ));
  const locationListItems = locationState.locations.map((location, index) => (
    <MenuItem value={location.id} key={index}>{location.name}</MenuItem>
  ));
  const organizerListItems = organizerState.organizers.map((organizer, index) => (
    <MenuItem value={organizer.id} key={index}>{organizer.name}</MenuItem>
  ));

  const handleLocationChange = event => {
    setSelectedLocation(event.target.value)
  }
  const handleOrganizerChange = event => {
    setSelectedOrganizer(event.target.value)
  }
  const handleImageChange = event => {
    setSelectedImage(event.target.files[0].name)
  }

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  }));

  const classes = useStyles();

  return (
    <form onSubmit={submitHandler} enctype="multipart/form-data">
      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="name"
            required
            label="Name"
            margin="dense"
            variant="outlined"
          />
        </FormControl>
      </Box>

      <Box mt={4} style={{ display: 'inline-flex' }} width={1}>
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              id="location"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              {locationListItems}
            </Select>
          </FormControl>
        </div>
        <LocationModalButton />
      </Box>

      <Box mt={4}>
        <FormControl fullWidth>
          <input
            accept="image/*"
            id="image"
            name="image"
            multiple
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="image">
            <div style={{ display: 'inline-flex' }}>
              <Button variant="contained" component="span" color="primary" className={classes.button}>
                <ImageSearchIcon className={classes.leftIcon} />
                Select image
              </Button>
              <p>{selectedImage ? selectedImage : 'No image'}</p>
            </div>
          </label>
        </FormControl>
      </Box>

      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="description"
            label="Description"
            margin="dense"
            variant="outlined"
          />
        </FormControl>
      </Box>

      <Box mt={4} style={{ display: 'inline-flex' }} width={1}>
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Organizer</InputLabel>
            <Select
              id="organizer"
              value={selectedOrganizer}
              onChange={handleOrganizerChange}
            >
              {organizerListItems}
            </Select>
          </FormControl>
        </div>
        <OrganizerModalButton />
      </Box>

      <Box mt={4}>
        <FormControl fullWidth>
          <InputLabel htmlFor="select-multiple-chip">Categories</InputLabel>
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
      </Box>

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
