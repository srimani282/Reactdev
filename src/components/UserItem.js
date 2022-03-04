import React from "react";
import PropTypes from "prop-types";

function UserItem({ user, title }) {
  console.log(user);
  return (
    <div>
      <div className="user-item">
        <h3>Name : {user.name}</h3>
        <h3>Role : {user.role}</h3>
        <h2>{title}</h2>
      </div>
    </div>
  );
}

UserItem.propTypes = {};

export default UserItem;
