import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

function UserProfile() {
  const [user, setUser] = useState({});
  const params = useParams();

  if (user.id) {
    return Object.entries(user).map(([key, params]) => (
      <div key={key}>
        <label>{key}</label>: {JSON.stringify(params)}
        <hr />
      </div>
    ))
  }
  return 'Loading...' 
}


export default UserProfile;