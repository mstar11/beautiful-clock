import React,{useState,useEffect} from "react"
import './App.css';

function App() {
  const [seconds,setSeconds] = useState(0)
  const [minutes,setMinute] = useState(0)
  const [houre,setHoure] = useState(0)

  console.log()
  const setClock=(()=>{
    const data =new Date();
    let secondstime=(data.getSeconds()) / 60 ;
    let minutestime=(secondstime + data.getMinutes()) / 60 ;
    let houretime =(minutestime + data.getHours()) / 12 ;
    setSeconds(secondstime)
    setMinute(minutestime)
    setHoure(houretime)

   
  })
  useEffect(()=>{
   let myinterval= setInterval(()=>{
      setClock()
    },1000)
    return(()=>{
      clearInterval(myinterval)
    })
  },[])
  console.log(seconds*360)




  return (
    <div className="clock_container">
      <div className="grid">
        <div className="content">
          <div className="clock_circle">
            <span className="clock_twelve"></span>
            <span className="clock_three"></span>
            <span className="clock_six"></span>
            <span className="clock_nine"></span>
            <div className="clock_rounder"></div>
            <div className="clock_hour" style={{transform:`rotate(${houre*360}deg)`}}></div>
            <div className="clock_minutes" style={{transform:`rotate(${minutes*360}deg)`}}></div>
            <div className="clock_seconds" style={{transform:`rotate(${seconds*360}deg)`}}></div>

          </div>

        </div>

      </div>
     
    </div>
  );
}

export default App;
