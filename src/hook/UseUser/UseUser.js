import { useEffect } from "react"
import { useState } from "react"

const UseUser =email=>{
    const [isUser,setUser]=useState(true)
    const [isadminLoding,setadminLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`https://resale-com-server.vercel.app/users/user/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.isUser)
            setUser(data.isUser)
            
            setadminLoding(false)
        })
        }
    },[email])
    return [isUser,setadminLoding]
}
export default UseUser;