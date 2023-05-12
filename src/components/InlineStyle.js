import React from 'react';
const photo="asset/image/app.gif";
function Inline()
{
    return (
        <>
        <div style={{width:"100%", height:"auto", margin:"auto",display:"flex", flexDirection:"row"}}> 
        <div style={{width:"100%", height:"auto", margin:"auto", padding:"50px"}}>
            <h1>My New App</h1>
            <img src={photo} alt='img01' style={{width:"50%", height:"auto"}} />
        </div>
        <div style={{width:"100%", height:"auto"}}>
            <h1>Please check my New app</h1>
              
            <input type='text' name='name' placeholder='Enter Your Name *' style={{width:"320px", height:"auto", padding:"8px"}}></input>
            <br /><br />
             
            <input type='text' name='email' placeholder='Enter Your email *' style={{width:"320px", height:"auto", padding:"8px"}}></input>
            <br /><br />  
            <input type='number' name='number' placeholder='Enter Your Number *' style={{width:"320px", height:"auto", padding:"8px"}}></input>
            <br /><br />
            <input type='password' name='password' placeholder='Enter Your Password *' style={{width:"320px", height:"auto", padding:"8px"}}></input>
            <br /><br />
            <input type='submit' name='Apply' value='Apply' style={{width:"140px", height:"auto", padding:"8px",backgroundColor:"aqua", border:"none", margin:"8px"}}></input>
            <input type='reset' name='reset' value="reset" style={{width:"140px", height:"auto", padding:"8px",backgroundColor:"red",color:"white", border:"none",margin:"8px"}}></input>

        </div>
        </div>
        </>
    )
}
export default Inline