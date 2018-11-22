import React, {Component} from 'react';
import { withRouter } from "react-router-dom"; 
import PropTypes from 'prop-types';

// courtesy of Beau Smith
const LinkButton = (props) => {
    const {
      history,
      location,
      match,
      staticContext,
      to,
      onClick,
      // ⬆ filtering out props that `button` doesn’t know what to do with.
      ...rest
    } = props
    return (
      <button
        {...rest} // `children` is just another prop!
        onClick={(event) => {
          onClick && onClick(event)
          history.push(to)
        }}
      />
    )
  }

  LinkButton.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
  } 
  
  export default withRouter(LinkButton)