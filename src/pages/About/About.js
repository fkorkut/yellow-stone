import React, { Component } from "react";
import PropTypes from "prop-types";
import { Skeleton } from "../../components";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './About.style';

 export const About =()=>{
    const classes = useStyles();

    return (
        <Skeleton>
        <div className={classes.root}>
          <h4>Hakkımızda </h4>
          <p> Detaylı Bilgi için 
           <a href="https://saritasch.com/" target="_blank" 
           style={{marginLeft:10, 
           marginRight:5 }}>Web sitemiz</a>'i ziyaret edebilirsiniz. 
           </p>
        </div>
      </Skeleton>
    )
 }