import React, { useState, useEffect}  from 'react';

const Details = (props) => {

    let   myId  = props.match.params.id;
    const [ user, setUser] = useState({ show: [] });

    const getUsersDetails = () => {
         fetch(`https://jsonplaceholder.typicode.com/users/${myId}`)
         .then(res => res.json())
         .then(json => {
             console.log(json)
             setUser(json)
             
         })
     }
 
     useEffect(() => {
       getUsersDetails();
     } , []);
     
     return (
         
         <div>
             <div>
                 <h1>This user has Following details</h1>
                 <ul>
                    {
                        [user].map(use => (
                            <div>
                            <li key={use.id}>Name of user is {use.name}</li>
                            <li>email of user is {use.email}</li>
                            <li>username of user is {use.username}</li>
                            </div>
                        ))
                    }
                </ul>
             </div>
         </div>
 
     );
 }
 
 export default Details;
