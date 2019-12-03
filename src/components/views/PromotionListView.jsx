import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Container, Grid, List, Typography } from '@material-ui/core';
import { fetchPromotions } from '../../actions/promotionActions';
import PromotionListItem from '../blocks/PromotionListItem';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

const PromotionListView = () => {
  const promotions = useSelector(state => state.promotions.promotions);

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

  useEffect(() => {
    dispatch(fetchPromotions());
  }, []);

  const PromotionList = () => {
    return promotions.map(promotion => {
      return (
        <PromotionListItem
          key={promotion.id}
          promotion={promotion}
          deleteHandler={() => console.log('delete')}
          showControls={true}
        />
      );
    });
  };
  return (
    <Container maxWidth="sm">
      <Grid container>
        <Grid item xs={8}>
          <Typography variant="h3">Etuudet</Typography>
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
      <List>
        <PromotionList />
      </List>
    </Container>
  );
};

export default PromotionListView;
