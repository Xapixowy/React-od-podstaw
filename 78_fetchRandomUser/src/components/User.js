import React from 'react';
import './User.css';

const User = (props) => {
   return (
      <>
         <div className="user">
            <img src={props.user.picture.large} alt="User" />
            <h1>
               {props.user.name.title} {props.user.name.first} {props.user.name.last}
            </h1>
            <p>
               <strong>E-mail:</strong> {props.user.email}
            </p>
            <p>
               <strong>Phone:</strong> {props.user.phone}
            </p>
         </div>
         <hr />
      </>
   );
};

export default User;
