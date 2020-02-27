import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import HobbyForm from '../blocks/HobbyForm';
import ActionCreators from '../../actions';
import { useDeepCompareEffect } from '../../hooks';

const HobbyCreateView = () => {
  const dispatch = useDispatch();
  useDeepCompareEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchCategories());
    dispatch(ActionCreators.fetchOrganizers());
    dispatch(ActionCreators.fetchLocations());
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Lisää uusi harrastus</Typography>
      <HobbyForm cancelUrl="/" />
    </Container>
  );
};

export default withRouter(HobbyCreateView);
