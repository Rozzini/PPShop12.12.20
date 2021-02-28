import React, { Fragment, useEffect, useState } from 'react'
import { authenticationService, userService } from '../../services';

export const HomePage: React.FC = () => {
  
  const [currentUser, setCurrentUser] = React.useState<any>();

  const [users, setUsers] = React.useState<any>();
  
useEffect(() => { 
  setCurrentUser(authenticationService.currentUserValue);
  setUsers(userService.getAll());
  ; }, [])

  return (
    <div>
                <h1>Hi {currentUser}!</h1>
                <p>You're logged in with React & JWT!!</p>
                <h3>Users from secure api end point:</h3>
                {/* {users &&
                    <ul>
                        {users.map(user =>
                            <li key={user.id}>{user.firstName} {user.lastName}</li>
                        )}
                    </ul>
                } */}
    </div>
  )
};

// import React from 'react';

// import { userService, authenticationService } from '../../services';


// class HomePage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             currentUser: authenticationService.currentUserValue,
//             users: null
//         };
//     }

//     componentDidMount() {
//         userService.getAll().then(users => this.setState({ users }));
//     }

//     render() {
//         const { currentUser, users } = this.state;
//         return (
//             <div>
//                 <h1>Hi {currentUser.firstName}!</h1>
//                 <p>You're logged in with React & JWT!!</p>
//                 <h3>Users from secure api end point:</h3>
//                 {users &&
//                     <ul>
//                         {users.map(user =>
//                             <li key={user.id}>{user.firstName} {user.lastName}</li>
//                         )}
//                     </ul>
//                 }
//             </div>
//         );
//     }
// }

// export { HomePage };
