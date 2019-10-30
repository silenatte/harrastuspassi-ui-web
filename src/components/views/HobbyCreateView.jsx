import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import HobbyForm from '../blocks/HobbyForm';
import ActionCreators from '../../actions';

const HobbyCreateView = ({ history }) => {
  const dispatch = useDispatch();
  const submitHandler = event => {
    event.preventDefault();
    console.log('Submit!', event.target);
    const hobbyData = new FormData()
    hobbyData.append('name', event.target.name.value)
    hobbyData.append('description', event.target.description.value)
    hobbyData.append('location', event.target.location.value)
    hobbyData.append('organizer', event.target.organizer.value)
    hobbyData.append('cover_image', event.target.image.files[0])
    event.target.category.value.split(',').forEach(element => hobbyData.append('categories', element))

    dispatch(ActionCreators.createHobby(hobbyData));
    history.push('/');
  };

  useEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchCategories());
    dispatch(ActionCreators.fetchOrganizers());
    dispatch(ActionCreators.fetchLocations());
  }, [dispatch]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Add new Hobby</Typography>
      <HobbyForm cancelUrl="/" submitHandler={submitHandler} />
    </Container>
  );
};

export default withRouter(HobbyCreateView);
