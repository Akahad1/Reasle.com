import { useEffect } from "react"
import { useState } from "react"

const useSellers =email=>{
    const [isSellers,setIsSellers]=useState(true)
    const [isadminLoding,setadminLoding]=useState(true)
    useEffect(()=>{
        if(email){
            fetch(`http://localhost:5000/users/seller/${email}`)
        .then(res=>res.json())
        .then(data=>{
            console.log(data.isSellers)
            setIsSellers(data.isSellers)
            
            setadminLoding(false)
        })
        }
    },[email])
    return [isSellers,setadminLoding]
}
export default useSellers;