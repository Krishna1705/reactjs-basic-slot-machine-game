import React from 'react';

let Notmatch=(props)=>{
    let {x,y,z}=props;
    return (
        <>
          <div style={{textAlign:'center'}}>
          <h1>{x} {y} {z}</h1><br/>
          <h3> NOT Matched</h3><hr/>
          </div>
        </>
        )
     
}

export default Notmatch;