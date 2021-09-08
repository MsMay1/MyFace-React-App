import React, { useEffect, useState } from "react";
import { EachUser } from "./EachUser";

export function UserDetails(props) {

    const [userDetails, setUserDetails] = useState([])
    const [userPosts, setUserPost] = useState([])

    useEffect(() => {
        const getUserDetails = async function () {
            const response = await fetch(`http://localhost:3001/users/${props.id}`);
            const json = await response.json();

            setUserDetails(json)
            setUserPost(json.posts)
        }
        getUserDetails();
        
    }, [])

    console.log(userPosts)
 
//MAP OF POSTS NOT WORKING    
// {userDetails.posts.map(
//     function(post, index){
//     return <EachUser post = {post} key = {index}/>
// })}


      return(  
        <div>
            <h1>{userDetails.name}</h1>
            <p>{userDetails.username}</p>
            <img src={userDetails.profileImageUrl} />
            {userPosts.map(
                function(post, index){
                return <EachUser post = {post} key = {index}/>
            })}
   
        </div>
      )

}
