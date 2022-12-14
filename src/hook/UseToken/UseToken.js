import { useEffect } from "react";
import { useState } from "react";

const useToken=email=>{
    const [token,setToken] =useState('')
    useEffect(()=>{
        fetch(`https://resale-com-server.vercel.app/jwt?email=${email}`)
    .then(res=>res.json())
    .then(data=>{
      if(data.accesToken){
        localStorage.setItem('accesToken',data.accesToken)
        setToken(data.accesToken)

        

      }
    })
    },[email])

    return [token]
}
export default useToken;