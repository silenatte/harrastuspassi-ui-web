import React from 'react';
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
    const hobbyData = {
      name: event.target.name.value,
      description: event.target.description.value
    };
    dispatch(ActionCreators.createHobby(hobbyData));
    history.push('/');
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h3">Add new Hobby</Typography>
      <HobbyForm cancelUrl="/" submitHandler={submitHandler} />
    </Container>
  );
};

export default withRouter(HobbyCreateView);
