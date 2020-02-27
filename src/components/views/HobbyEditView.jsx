import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import ActionCreators from '../../actions';
import { useDeepCompareEffect } from '../../hooks';
import HobbyEditForm from '../blocks/HobbyEditForm';

const HobbyEditView = props => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  useDeepCompareEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchCategories());
    dispatch(ActionCreators.fetchOrganizers());
    dispatch(ActionCreators.fetchLocations());
    dispatch(ActionCreators.fetchHobby(id));
    dispatch(ActionCreators.fetchHobbyEvents(id));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Muokkaa harrastusta</Typography>
      <HobbyEditForm cancelUrl="/" />
    </Container>
  );
};

export default withRouter(HobbyEditView);
