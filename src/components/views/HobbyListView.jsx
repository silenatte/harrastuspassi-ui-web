import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, List, Typography } from '@material-ui/core';
import ActionCreators from '../../actions';
import HobbyListItem from '../blocks/HobbyListItem';

const HobbyListView = () => {
  const dispatch = useDispatch();
  const hobbyState = useSelector(state => state.hobbies);
  const hobbyList = hobbyState.hobbies.map(hobby => (
    <HobbyListItem
      key={hobby.id}
      imageUrl={hobby.cover_image}
      name={hobby.name}
      secondaryText="foo bar"
    />
  ));

  useEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchHobbies());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Hobbies</Typography>
      <List disablePadding={false}>{hobbyList}</List>
    </Container>
  );
};

export default HobbyListView;
