import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Typography, Container } from '@material-ui/core';
import ActionCreators from '../../actions';
import { useDeepCompareEffect } from '../../hooks';
import PromotionEditForm from '../blocks/PromotionEditForm';

const PromotionEditView = props => {
  const dispatch = useDispatch();
  const { id } = props.match.params;
  useDeepCompareEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchOrganizers());
    dispatch(ActionCreators.fetchLocations());
    dispatch(ActionCreators.fetchPromotion(id));
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">Muokkaa etuutta</Typography>
      <PromotionEditForm cancelUrl="/promotions" />
    </Container>
  );
};

export default withRouter(PromotionEditView);
