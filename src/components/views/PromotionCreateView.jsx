import React from 'react';
import { Typography, Container } from '@material-ui/core';
import PromotionForm from '../blocks/PromotionForm';

/**
 * Component Promotion creation view.
 * @return {React.Component} PromotionCreateView
 */
export const PromotionCreateView = () => {
  return (
    <Container maxWidth="sm">
      <Typography>Etuudet</Typography>
      <PromotionForm />
    </Container>
    
  );
};
