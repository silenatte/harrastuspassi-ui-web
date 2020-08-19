import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, List, Typography, Button, Grid } from '@material-ui/core';
import ActionCreators from '../../actions';
import HobbyListItem from '../blocks/HobbyListItem';
import { makeStyles } from '@material-ui/styles';
import hplogo from '../../img/hp-logo-500x500.png';
import { usePositiveEffect } from '../../hooks';
import { fetchHobbyPage } from '../../actions/hobbyActions';

const useStyles = makeStyles({
  addHobbyContainer: {
    alignSelf: 'center'
  },
  addHobbyBtn: {
    float: 'right'
  }
});

const HobbyListView = () => {
  const dispatch = useDispatch();
  const hobbyState = useSelector(state => state.hobbies);
  const classes = useStyles();
  const accessToken = useSelector(state => state.auth.accessToken);
  const hobbyDeleteHandler = hobby_id => event => {
    dispatch(ActionCreators.deleteHobby(hobby_id));
  };
  const hobbyList = hobbyState.hobbies.map(hobby => (
    <HobbyListItem
      key={hobby.id}
      imageUrl={hobby.cover_image || hplogo}
      name={hobby.name}
      id={hobby.id}
      secondaryText=""
      showControls={true}
      deleteHandler={hobbyDeleteHandler(hobby.id)}
    />
  ));

  usePositiveEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchHobbies());
  }, [accessToken]);

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h4">Harrastukset</Typography>
        </Grid>
        <Grid item xs={4} className={classes.addHobbyContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addHobbyBtn}
            component={Link}
            to="/hobbies/new"
          >
            Uusi harrastus
          </Button>
        </Grid>
      </Grid>
      {hobbyState.hobbies.length > 0 ? (
        <List disablePadding={false}>{hobbyList}</List>
      ) : (
        <p>Sinulla ei ole lisättyjä harrastuksia.</p>
      )}
      {hobbyState.next && (
        <Button onClick={() => dispatch(fetchHobbyPage(hobbyState.next))}>
          Hae lisää
        </Button>
      )}
    </Container>
  );
};

export default HobbyListView;
