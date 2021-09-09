import React, { useEffect, useState } from "react";
import { EachUser } from "./EachUser";
import { useParams } from "react-router";

export function UserDetails() {
    const {userId} = useParams()
    const [userDetails, setUserDetails] = useState({})
    const [userPosts, setUserPost] = useState([])

    useEffect(() => {
        const getUserDetails = async function () {
            const response = await fetch(`http://localhost:3001/users/${userId}`);
            const json = await response.json();

            setUserDetails(json)
            setUserPost(json.posts)
        }
        getUserDetails();
        
    }, [])

    console.log(userDetails)
 
//MAP OF POSTS NOT WORKING    
//  {userDetails.posts.map(
//     function(post, index){
//     return <EachUser post = {post} key = {index}/>
//    })}


      return(  
        <div className = "users-page">
            <h1>{userDetails.name}</h1>
            <p>{userDetails.username}</p>
            <img src={userDetails.profileImageUrl} />
            <div id = "Users-Posts-Container">
                {userPosts.map(
                function(post, index){
                return <EachUser post = {post} key = {index}/>
                })}
            </div>

   
        </div>
      )

}
