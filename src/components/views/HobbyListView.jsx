import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container, List, Typography, Button, Grid } from '@material-ui/core';
import ActionCreators from '../../actions';
import HobbyListItem from '../blocks/HobbyListItem';
import { makeStyles } from '@material-ui/styles';

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
  const hobbyDeleteHandler = hobby_id => event => {
    dispatch(ActionCreators.deleteHobby(hobby_id));
  };
  const hobbyList = hobbyState.hobbies.map(hobby => (
    <HobbyListItem
      key={hobby.id}
      imageUrl={hobby.cover_image || 'https://placekitten.com/50/50'}
      name={hobby.name}
      secondaryText=""
      showControls={hobby.permissions.can_edit}
      deleteHandler={hobbyDeleteHandler(hobby.id)}
    />
  ));

  useEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchHobbies());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h3">Hobbies</Typography>
        </Grid>
        <Grid item xs={4} className={classes.addHobbyContainer}>
          <Button
            variant="contained"
            color="primary"
            className={classes.addHobbyBtn}
            component={Link}
            to="/hobbies/new"
          >
            New hobby
          </Button>
        </Grid>
      </Grid>
      <List disablePadding={false}>{hobbyList}</List>
    </Container>
  );
};

export default HobbyListView;
