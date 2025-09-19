import React from "react";
import { useParams } from "react-router-dom";

function User(){
    const {name}=useParams()
    return(
         <h1>Hi {name} good to see you </h1>
    )
   

}
export default User;