import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'


  function Card() {

   return (

<h1>'әніме жынды'</h1>


   )

  }

  function App() {


  return (
   <div>  
      <p style={{color:'Darkred',

        width: '150px',height:'150px', 
        background:'gray'}}>steve lacy 

        </p> 

      <p style={{color:'lightblue',

         width: '150px',height:'150px', 
        background:'darkred'}}>duvet

        </p> 

      <p style={{color:'darkyellow',

         width: '150px',height:'150px', 
        background:'yellow'}}>this is old dog

        </p> 

      <p style={{color:'Darkgreen',

         width: '150px',height:'150px', 
        background:'lightgray'}}>macdemarco
        
        </p> 
   </div> 
  )
  }
    export default App;