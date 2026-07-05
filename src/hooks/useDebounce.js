import { useEffect, useState } from "react"

export const useDebounce=(value,delay)=>{

const [debounceValue,setdebounceValue]=useState("")

useEffect(()=>{
    const timer=setTimeout(()=>{
setdebounceValue(value)
    },delay)

    return ()=>clearInterval(timer)
},[value,delay])

return debounceValue;

}
