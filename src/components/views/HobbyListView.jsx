import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Typography } from '@material-ui/core';
import ActionCreators from '../../actions';
import HobbyListItem from '../blocks/HobbyListItem';

const HobbyListView = () => {
  const dispatch = useDispatch();
  const hobbyState = useSelector(state => state.hobbies);
  const authState = useSelector(state => state.auth);
  const isLoggedIn = authState.accessToken != null;
  const hobbyDeleteHandler = hobby_id => event => {
    dispatch(ActionCreators.deleteHobby(hobby_id));
  };
  const hobbyList = hobbyState.hobbies.map(hobby => (
    <HobbyListItem
      key={hobby.id}
      imageUrl={hobby.cover_image}
      name={hobby.name}
      secondaryText="foo bar"
      showControls={isLoggedIn}
      deleteHandler={hobbyDeleteHandler(hobby.id)}
    />
  ));

  useEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchHobbies());
    dispatch(ActionCreators.fetchToken());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Hobbies</Typography>
      <List disablePadding={false}>{hobbyList}</List>
    </Container>
  );
};

export default HobbyListView;
