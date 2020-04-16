import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import OrganizerModalButton from './OrganizerModalButton';
import LocationModalButton from './LocationModalButton';
import ActionCreators from '../../actions';
import moment from 'moment';
import PromotionModalButton from './PromotionModalButton';
import { useDeepCompareEffect } from '../../hooks';
import { fetchLocations } from '../../actions/locationActions';
import { fetchOrganizers } from '../../actions/organizerActions';
import { setBatch } from 'react-redux/lib/utils/batch';
import { setPromotionFormData } from '../../actions/formActions';

const PromotionForm = () => {
  const organizerState = useSelector(state => state.organizers);
  const locationState = useSelector(state => state.locations);
  const formState = useSelector(state => state.formData);
  const history = useHistory();
  const locationID = formState.promotion.location;
  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;
    switch (event.target.name) {
      case 'cover_image':
        const reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);
        reader.onload = () => {
          const image = reader.result;
          dispatch(ActionCreators.setPromotionFormData(name, image));
        };
        reader.onerror = () => {
          window.alert('Kuvan käsittelyssä tapahtui virhe!');
        };
        break;
      default:
        dispatch(ActionCreators.setPromotionFormData(name, value));
    }
  };

  useDeepCompareEffect(() => {
    dispatch(fetchLocations());
    dispatch(fetchOrganizers());
    dispatch(setPromotionFormData('start_time', moment()));
    dispatch(setPromotionFormData('end_time', moment()));
    dispatch(setPromotionFormData('start_date', moment()));
    dispatch(setPromotionFormData('end_date', moment()));
  }, []);

  const locationListItems = locationState.locations.map((location, index) => (
    <MenuItem value={location.id} key={index}>
      {location.name}
    </MenuItem>
  ));
  const organizerListItems = organizerState.organizers.map(
    (organizer, index) => (
      <MenuItem value={organizer.id} key={index}>
        {organizer.name}
      </MenuItem>
    )
  );

  const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    leftIcon: {
      marginRight: theme.spacing(1)
    },
    cancelButton: {
      marginRight: theme.spacing(2)
    }
  }));

  const classes = useStyles();

  const submitHandler = event => {
    event.preventDefault();

    let postedPromotion = { ...formState.promotion };
    if (
      postedPromotion.cover_image === null ||
      postedPromotion.cover_image.length < 300
    ) {
      delete postedPromotion.cover_image;
    }

    for (const key in postedPromotion) {
      if (postedPromotion.hasOwnProperty(key)) {
        if (key === 'start_date' || key === 'end_date') {
          postedPromotion = {
            ...postedPromotion,
            [key]: postedPromotion[key].format('YYYY-MM-DD')
          };
        } else if (key === 'start_time' || key === 'end_time') {
          postedPromotion = {
            ...postedPromotion,
            [key]: postedPromotion[key].format('HH:mm')
          };
        }
      }
    }

    dispatch(ActionCreators.createPromotion(postedPromotion));
    history.push('/promotions');
  };

  return (
    <form onSubmit={submitHandler}>
      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="name"
            name="name"
            value={formState.promotion.name || ''}
            placeholder={''}
            required
            label="Nimi"
            margin="dense"
            variant="outlined"
            onChange={handleChange}
          />
        </FormControl>
      </Box>

      <Box mt={4} style={{ display: 'inline-flex' }} width={1}>
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Vaihda sijainti *</InputLabel>
            <Select
              id="location"
              name="location"
              value={locationID || ''}
              onChange={handleChange}
              required
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
              <Button
                variant="contained"
                component="span"
                color="primary"
                className={classes.button}
              >
                <ImageSearchIcon className={classes.leftIcon} />
                Valitse kuva
              </Button>
              <p>
                {formState.promotion.cover_image ? 'Kuva valittu' : 'Ei kuvaa'}
              </p>
            </div>
          </label>
        </FormControl>
      </Box>

      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="description"
            name="description"
            label="Kuvaus *"
            value={formState.promotion.description || ''}
            margin="dense"
            variant="outlined"
            onChange={handleChange}
            required
          />
        </FormControl>
      </Box>
      <Box mt={4}>
        <FormControl fullWidth>
          <TextField
            id="available_count"
            name="available_count"
            label="Käyttökertojen määrä"
            value={formState.promotion.available_count || ''}
            margin="dense"
            variant="outlined"
            type="number"
            required
            onChange={handleChange}
          />
        </FormControl>
      </Box>
      <Box
        mt={4}
        style={{ display: 'inline-flex', marginBottom: 30 }}
        width={1}
      >
        <div style={{ width: '100%' }}>
          <FormControl fullWidth>
            <InputLabel>Vaihda järjestäjä *</InputLabel>
            <Select
              id="organizer"
              name="organizer"
              value={formState.promotion.organizer || ''}
              onChange={handleChange}
              required
            >
              {organizerListItems}
            </Select>
          </FormControl>
        </div>
        <OrganizerModalButton />
      </Box>
      <Typography variant="h6">Voimassaoloaika</Typography>
      <Box mt={4}>
        <Grid
          container
          direction="row"
          spacing={3}
          style={{ flexWrap: 'nowrap' }}
        >
          <Grid item>
            <TextField
              value={
                formState.promotion.start_date
                  ? moment(formState.promotion.start_date).format('DD.MM.YYYY')
                  : 0
              }
              variant="outlined"
              label="Alkamispvm"
              required
              InputProps={{
                readOnly: true
              }}
            />
            <Box mt={3}>
              <TextField
                value={
                  formState.promotion.start_time
                    ? moment(formState.promotion.start_time).format('HH:mm')
                    : 0
                }
                variant="outlined"
                label="Alkamisaika"
                required
                InputProps={{
                  readOnly: true
                }}
              />
            </Box>
          </Grid>
          <Grid item>
            <TextField
              value={
                formState.promotion.end_date
                  ? moment(formState.promotion.end_date).format('DD.MM.YYYY')
                  : 0
              }
              variant="outlined"
              label="Loppumispvm"
              required
              InputProps={{
                readOnly: true
              }}
            />
            <Box mt={3}>
              <TextField
                value={
                  formState.promotion.end_time
                    ? moment(formState.promotion.end_time).format('HH:mm')
                    : 0
                }
                variant="outlined"
                label="Loppumisaika"
                required
                InputProps={{
                  readOnly: true
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <br />
        <PromotionModalButton />
      </Box>
      <Box mt={10} mb={3}>
        <Grid container justify="flex-end">
          <Grid item>
            <Button component={Link} to={'/promotions'} className={classes.cancelButton}>
              Peruuta
            </Button>
            <Button variant="contained" color="primary" type="submit">
              Tallenna
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default PromotionForm;
