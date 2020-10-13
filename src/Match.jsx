import React from 'react';

let Match=(props)=>{
    const {x,y,z}=props
    return(
        <>
        <div style={{textAlign:'center'}}>
        <h1>{x} {y} {z}</h1><br/>
        <h3>Matched</h3><hr/>
        </div>
      </>
    )
}

export default Match;