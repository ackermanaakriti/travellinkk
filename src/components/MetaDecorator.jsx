import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";

const MetaDecorator = ({ title }) => (
  <Helmet>
    <title>{title}</title> 
  </Helmet>
);

MetaDecorator.propTypes = {
  title: PropTypes.string.isRequired, 
};

export default MetaDecorator;