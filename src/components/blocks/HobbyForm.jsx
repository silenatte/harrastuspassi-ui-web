import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControl, TextField, Button, Grid, Select, InputLabel, MenuItem, Box, Input, Chip, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import OrganizerModalButton from './OrganizerModalButton';
import LocationModalButton from './LocationModalButton';
import HobbyEventModalButton from './HobbyEventModalButton';
import HobbyEventItem from './HobbyEventItem';
import ActionCreators from '../../actions';
import { useDeepCompareEffect } from '../../hooks';
import moment from 'moment';
import { Redirect } from 'react-router-dom';

const HobbyForm = ({ cancelUrl }) => {
  const categoryState = useSelector(state => state.categories);
  const organizerState = useSelector(state => state.organizers);
  const locationState = useSelector(state => state.locations);
  const formState = useSelector(state => state.formData);

  const [hobbyEventData, setHobbyEventData] = React.useState([]);

  const dispatch = useDispatch();
  const handleChange = (e) => {
    switch (e.target.name) {
      case 'cover_image':
        const reader = new FileReader();
        const name = e.target.name;
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = (e) => {
          const image = reader.result;
          dispatch(ActionCreators.setFormData(name, image));
        }
        reader.onerror = () => {
          window.alert('Kuvan käsittelyssä tapahtui virhe!');
        }
        break;
      default:
        dispatch(ActionCreators.setFormData(e.target.name, e.target.value))
    }
  }

  const handleRemoveEvent = id => {
    const filteredEvents = hobbyEventData.filter(item => item.id !== id);
    dispatch(ActionCreators.removeHobbyEvent(filteredEvents));
  }

  const handleNewEvent = data => {
    setHobbyEventData([data, ...hobbyEventData]);
  }

  const categoryListItems = categoryState.categories.map((category, index) => (
    <MenuItem value={category.id} key={index}>{category.name}</MenuItem>
  ));
  const locationListItems = locationState.locations.map((location, index) => (
    <MenuItem value={location.id} key={index}>{location.name}</MenuItem>
  ));
  const organizerListItems = organizerState.organizers.map((organizer, index) => (
    <MenuItem value={organizer.id} key={index}>{organizer.name}</MenuItem>
  ));
  const hobbyEventItems = formState.hobbyEvents.map((hobbyEvent, index) => (
    <HobbyEventItem data={hobbyEvent} key={index} handleRemoveEvent={(i) => handleRemoveEvent(i)} />
  ));

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing.unit,
    },
    leftIcon: {
      marginRight: theme.spacing.unit,
    },
  }));

  const classes = useStyles();

  const submitHandler = event => {
    event.preventDefault();
    dispatch(ActionCreators.createHobby(formState.hobby));
  };

  useDeepCompareEffect(() => {
    let postedEvents = [...formState.hobbyEvents]
    console.log('DEEPCOMPARE EFFECT: ', formState.hobbyQueryState)
    if (formState.hobby.id) {
      console.log('INSIDE IF NAO')
      postedEvents.forEach((object, index) => {
        for (let key in object) {
          console.log('AVAIMIA JOSTAIN: ', key, object)
          if (key === 'start_date' || key === 'end_date') {
            postedEvents[index] = {
              ...postedEvents[index],
              [key]: object[key].format('YYYY-MM-DD')
            }
          }
          else if (key === 'start_time' || key === 'end_time') {
            postedEvents[index] = {
              ...postedEvents[index],
              [key]: object[key].format('HH:mm')
            }
          }
        }
        dispatch(ActionCreators.createHobbyEvent({ ...postedEvents[index], hobby: formState.hobby.id }));
      });
    }
  }, [formState.hobby.id])

  return (
    <form onSubmit={submitHandler}>
      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="name"
            name="name"
            required
            label="Name"
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>
      </Box>

      <Box mt={4} style={{ display: 'inline-flex' }} width={1}>
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Location</InputLabel>
            <Select
              id="location"
              name="location"
              value={formState.hobby.location}
              onChange={handleChange}
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
            name="cover_image"
            type="file"
            style={{ display: 'none' }}
            onChange={handleChange}
          />
          <label htmlFor="image">
            <div style={{ display: 'inline-flex' }}>
              <Button variant="contained" component="span" color="primary" className={classes.button}>
                <ImageSearchIcon className={classes.leftIcon} />
                Select image
              </Button>
              <p>{formState.hobby.cover_image ? 'Image selected' : 'No image'}</p>
            </div>
          </label>
        </FormControl>
      </Box>

      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="description"
            name="description"
            label="Description"
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>
      </Box>

      <Box mt={4} style={{ display: 'inline-flex' }} width={1}>
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Organizer</InputLabel>
            <Select
              id="organizer"
              name="organizer"
              value={formState.hobby.organizer}
              onChange={handleChange}
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
            name="categories"
            value={formState.hobby.categories || []}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            inputProps={{
              name: 'categories',
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

      <Box mt={4}>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography variant="h4">Hobby events</Typography>
          </Grid>
          <Grid item>
            <HobbyEventModalButton handleNewEvent={handleNewEvent} />
          </Grid>
        </Grid>
      </Box>

      {hobbyEventItems}

      <Box mt={3} mb={3}>
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
