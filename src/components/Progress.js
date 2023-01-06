import * as React from 'react';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';


function Progress() {
  return (
    <Stack direction="row">
        <div style={{display:"flex", flexDirection:"column"}}><CircularProgress variant="determinate" value={75} color="success"  /><p style={{marginRight:"350px", fontSize:"25px", color:"#499557", fontWeight:"bold"}}>75% Time Saved</p> <p style={{marginRight:"250px", alignItems:"center", fontSize:"20px"}}>Average time savings per writing project.</p> </div>
        <div style={{display:"flex", flexDirection:"column"}}><CircularProgress variant="determinate" value={100} color="success" /> <p style={{marginRight:"350px", fontSize:"25px",color:"#499557",fontWeight:"bold"}}>50+ Million</p><p style={{marginRight:"250px",alignItems:"center",fontSize:"20px"}}>Trusted by millions worldwide.</p></div>
        <div style={{display:"flex", flexDirection:"column"}}><CircularProgress variant="determinate" value={85}  color="success" /> <p style={{marginRight:"350px", fontSize:"25px",color:"#499557",fontWeight:"bold"}}>85% Students</p><p style={{marginRight:"250px",alignItems:"center",fontSize:"20px"}}>Who reported their grades improved after using QuillBot.</p></div>
      
    </Stack>
  )
}

export default Progress