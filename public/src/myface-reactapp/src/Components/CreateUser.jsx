import React, {useEffect, useState} from "react";


export function CreateUser(){
    
    // const [name, setName] = useState("")
    // const [username, setUsername] = useState("")
    // const [email, setEmail] = useState("")

    // function submitForm(event){
    //     console.log(
    //         `name:${name}`
    //     );
    //     event.preventDefault() 

    // }

    return (
        <form method="post" action= "http://localhost:3001/users/create">
            <div>
                <label>
                    Name:
                    <input type="text" name="name"  required/>
                </label>
                <label>
                    Username:
                    <input type="text" name="username" required />
                </label>
                 <label>
                    Email:
                    <input type="email" name="email"  required/>
                </label>
                <label>
                ProfileImageUrl:
                <input type="text" name="profileImageUrl" required/>
                </label>
                <label>
                    CoverImageUrl:
                    <input type="text" name="coverImageUrl" required/>
                </label>
                    <button type="submit" >Submit</button>
            </div>
        </form>
    )    

}