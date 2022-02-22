import React from "react";
import PropTypes from "prop-types";

function UserDetails(props) {
  return (
    <div>
      <h1>{props.data.name}</h1>
      <h1>{props.data.cls}</h1>
      <h1>{props.data.course}</h1>
    </div>
  );
}

UserDetails.propTypes = {};

export default UserDetails;
