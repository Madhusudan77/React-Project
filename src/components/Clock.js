import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

export default function Clock(props) {
var today = new Date();
const [dateTime, setDateTime] = useState(null);

useEffect(()=>{
   const interval =  setInterval(() => {
        let date = (today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate());
        let time = (today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds());
        setDateTime(date+' '+time)
    },1000)
    return () => {
        clearInterval(interval);
    }
})


 
console.log("dateTime", dateTime);

    return (
        <div className="container p-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            {dateTime}
        </div>
    )
}
