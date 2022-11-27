import { useEffect } from "react"
import { useState } from "react"

const useAdmin =email=>{
    const [isadmin,setIsadmin]=useState(true)
    const [isadminLoding,setadminLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/admin/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.issadmin)
            setIsadmin(data.issadmin)
            
            setadminLoding(false)
        })
        }
    },[email])
    return [isadmin,setadminLoding]
}
export default useAdmin;