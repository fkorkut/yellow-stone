import React, { Component } from "react";
import PropTypes from "prop-types";
import { CalculateComponents, Skeleton } from "../../components";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './Home.style';

export const Home = (props) => {
    const classes = useStyles();

 
  return (
    <Skeleton >
      <div className={classes.root}>
      <CalculateComponents/>
      </div>
    </Skeleton>
  );
};
