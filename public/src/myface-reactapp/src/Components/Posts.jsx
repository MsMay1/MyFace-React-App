import { GetPosts } from "./GetPosts";

let post = GetPosts;

 export function eachPost (){ 
     
    post.map(
        function(post, index){
            return (
                <ul>
                    <h2>{post.message}</h2>
                    <img src = {post.imageUrl} alt ={post.message} key ={index} />
                    <p> {post.postedBy.name}</p>
                </ul>
            )
        })
        
    }   
    