import React, { Component } from "react";
import PropTypes from "prop-types";
import { Navbar } from "../Navbar/Navbar";
import { Container } from "@material-ui/core";

export const Skeleton = (props) => {
  return (
    <Container fixed>
      <Navbar props={props.navigate}/>
      {props.children}
    </Container>
  );
};
