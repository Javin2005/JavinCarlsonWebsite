//frontend/src/hooks/useTypewriter

import { useEffect, useState } from "react";



export function useTypewriter(text: string, speed: number = 80) {
    
    const[displayed, setDisplayed] = useState<string>("")
    useEffect(() => {
        let i = 0
       
        const interval = setInterval(() => {
            setDisplayed(text.slice(0,i+1))
            i+=1

            if(i<text.length){
                clearInterval(interval)
            }
        },speed)
        return () => clearInterval(interval)

        
        
        

    },[text, speed])
    return displayed

}