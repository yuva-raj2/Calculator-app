import React, { useState } from "react"
function Calculator() {
  let [calci,setcalci]=useState("");
  return (
    <div className="Calculator">
      <h1>Calculator App</h1>
      <div className="Calculator-app">
        <div className="Calculator-text">
          <input type="text" className="calci-text" value={calci} autoFocus="on"/>
        </div>
        <div className="Calculator-box-1">
          <input type="submit" className="allclear" value="AC" onClick={e=>setcalci(calci="")}/>
          <input type="submit" className="decrement" value="DC" onClick={e=>setcalci(calci.slice(0,-1))}/>
          <input type="button" className="dot" value="." onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="divide" value="/" onClick={e=>setcalci(calci+e.target.value)}/>
        </div>
        <br/>
        <div className="Calculator-box-2">
          <input type="submit" className="seven" value="7" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="eight" value="8" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="button" className="nine" value="9" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="multiply" value="*" onClick={e=>setcalci(calci+e.target.value)}/>
        </div>
        <br/>
        <div className="Calculator-box-3">
          <input type="submit" className="four" value="4" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="five" value="5" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="button" className="six" value="6" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="minus" value="-" onClick={e=>setcalci(calci+e.target.value)}/>
        </div>
        <br/>
        <div className="Calculator-box-4">
          <input type="submit" className="one" value="1" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="two" value="2" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="button" className="three" value="3" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="plus" value="+" onClick={e=>setcalci(calci+e.target.value)}/>
        </div>
        <br/>
        <div className="Calculator-box-5">
          <input type="submit" className="double-zero" value="00" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="submit" className="zero" value="0" onClick={e=>setcalci(calci+e.target.value)}/>
          <input type="button" className="=" value="=" onClick={e=>setcalci(eval(calci))}/>
        </div>
      </div>
    </div>
  )
}

export default Calculator