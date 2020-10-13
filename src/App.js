import React from 'react';
import './App.css';
import Match from './Match';
import Notmatch from './Notmatch';
import Sdata from './Sdata';


console.log(Sdata);
const SlotM=(props)=>{
   // console.log(props);
    const {x,y,z}=props//object destructuring concept

    if(x===y && y===z){
      return (
        <>
        <Match x={x} y={y} z={z}/>
        </>
      )
    }else{
      return (
        <>
          <Notmatch x={x}y={y} z={z}/>
        </>
        )
     
    }
    
};

function App() {
  return (
    <>
    <h1 style={{textAlign:'center',margin:'2%'}}>🎰 <span style={{color:'white',backgroundColor:'grey'}}>Welcome to Slot Machine Game </span> 🎰</h1>
    <hr/>
    <div>
     {/*  
      <SlotM x= '🍎' y='😄' z='🍌'/>
      <SlotM x='😄' y='😄' z='😄'/>
      <SlotM x='😄' y='😄' z='😄'/> */
      Sdata.map(function(cvalue){
                return (
                  <SlotM key={cvalue.id} x={cvalue.x} y={cvalue.y} z={cvalue.z}/>
                )
      })
      
      }
    </div>
    </>

  );
}

export default App;
