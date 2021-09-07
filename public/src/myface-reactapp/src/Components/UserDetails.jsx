import React, { useEffect, useState } from "react";
import { EachUser } from "./EachUser";

export function UserDetails() {

    const [userDetails, setUserDetails] = useState({})

    useEffect(() => {
        const getUserDetails = async function () {
            const response = await fetch("http://localhost:3001/users/1");
            const json = await response.json();

            setUserDetails(json)
        }
        getUserDetails();
        
    }, [])

    console.log(userDetails)
 
//MAP OF POSTS NOT WORKING    
//     userDetails.posts.map(
//         function(post, index){
//             return <EachUser post = {post} key = {index}/>
//         }
//    )


      return(  
        <div>
            <h1>{userDetails.name}</h1>
            <p>{userDetails.username}</p>
            <img src={userDetails.profileImageUrl} />
        </div>
      )

}
