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
                         //here error we're getting is that setState is setting obj in user 
                         //and .map() method can't apply on objects so we need a way to somehow add obj to array
                         //so we can apply map on it
                        // user.map(f => {})
                    }
                 </ul>
             </div>
         </div>
 
     );
 }
 
 export default Details;