import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, List, Typography } from '@material-ui/core';
import {
  deletePromotion,
  fetchPromotions
} from '../../actions/promotionActions';
import PromotionListItem from '../blocks/PromotionListItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import hplogo from '../../img/hp-logo-500x500.png'
import { usePositiveEffect } from '../../hooks';
import ActionCreators from '../../actions';

const PromotionListView = () => {
  const promotions = useSelector(state => state.promotions.promotions);
  const accessToken = useSelector(state => state.auth.accessToken);
  const dispatch = useDispatch();

  const useStyles = makeStyles({
    addHobbyContainer: {
      alignSelf: 'center'
    },
    addHobbyBtn: {
      float: 'right'
    }
  });

  const classes = useStyles();

  usePositiveEffect(() => {
    // initial data fetch
    dispatch(ActionCreators.fetchPromotions());
  }, [accessToken]);


  const PromotionList = () => {
    return promotions.map(promotion => {
      return (
        <PromotionListItem
          key={promotion.id}
          promotion={promotion}
          imageUrl={promotion.cover_image || hplogo}
          deleteHandler={() => dispatch(deletePromotion(promotion.id))}
          showControls={true}
        />
      );
    });
  };
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h4">Etuudet</Typography>
        </Grid>
      <Grid item xs={4} className={classes.addHobbyContainer}>
        <Button
          variant="contained"
          color="primary"
          className={classes.addHobbyBtn}
          component={Link}
          to="/promotions/new"
        >
          Uusi etuus
        </Button>
      </Grid></Grid>
      {promotions.length > 0 ?
        <List>
          <PromotionList />
        </List>
      :
        <p>Sinulla ei ole lisättyjä etuuksia.</p>
      }
    </Container>
  );
};

export default PromotionListView;
