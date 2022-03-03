import React from "react";
import PropTypes from "prop-types";

function UserItem(props) {
  console.log("kbdu");
  return (
    <div>
      <div className="user-item">
        <h3>Name : {props.user.name}</h3>
        <h3>Role : {props.user.role}</h3>
      </div>
    </div>
  );
}

UserItem.propTypes = {};

export default UserItem;
