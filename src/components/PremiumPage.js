import React from 'react';
import { GlobalStyles } from '@mui/material';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';
import { fontSize } from '@mui/system';
import LinearProgress from '@mui/material/LinearProgress';
import FreeTables from './FreeTables';
import PremiumTables from './PremiumTables';
import Progress from './Progress';
import SwipeImg from './SwipeImg';



// const useStyles = makeStyles((theme) => ({
//   '@global': {
//     width: '100%',
//     maxWidth: 360,
//     backgroundColor: theme.palette.background.paper,
//   },
// }));


const PremiumPage = () => {
  //const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <div style={{
        backgroundImage: "url(/images/Capture.JPG)",
        backgroundPosition: "left bottom",
        backgroundRepeat: "no-repeat",
        backgroundSize: "auto 100%",
        paddingTop: "10px",
        paddingBottom: "50px",
        marginTop: "50px"
      }}>
        <h1><Typography variant="h4" gutterBottom style={{
          fontfamily: "Open Sans",
        }}>
          Save time and write with confidence
        </Typography></h1>
        <Fab variant="extended" style={{
          borderRadius: 35,
          backgroundColor: "#499557",
          padding: "18px 36px",
          fontSize: "18px",
          color: "white",

        }}>
          Upgrade to Quillbot Premium
        </Fab>

        <div style={{display:"flex"}}>
          <div style={{marginLeft:"5rem", marginRight:"0rem", marginTop:"50px", height:"6rem"}}>
          <SwipeImg />
          </div>

          <div>
            <List style={{
              left: "20%",
              display: "block",
              justifyContent: "center"
            }}>
              <ListItem style={{
                fontSize: "23px",
                color: "#499557",
                fontWeight: "bold"
              }}>
                Increase your productivity
              </ListItem>

              <ListItem style={{
                fontfamily: "'Open Sans',sans-serif",
                fontweight: "400",
                fontSize: "19px",
                color: "#505050",
                bottom: "15px"
              }}>Paraphrase more text at once to finish writing faster.</ListItem>


              <LinearProgress variant="determinate" color='success' value={progress} style={{ width: "83%", display: "block", left: "16px", bottom: "15px", }} />


              <ListItem style={{
                fontSize: "23px",
                color: "#499557",
                fontWeight: "bold",

              }}>
                Access all modes
              </ListItem>
              <ListItem style={{
                fontfamily: "'Open Sans',sans-serif",
                fontweight: "400",
                fontSize: "19px",
                color: "#505050",
                bottom: "15px"
              }}>Get maximum control over how you paraphrase.</ListItem>

              <LinearProgress variant="determinate" color='success' value={progress} style={{ width: "83%", display: "block", left: "16px", bottom: "15px", }} />

              <ListItem style={{
                fontSize: "23px",
                color: "#499557",
                fontWeight: "bold"
              }}>
                Scan for plagiarism
              </ListItem>
              <ListItem style={{
                fontfamily: "'Open Sans',sans-serif",
                fontweight: "400",
                fontSize: "19px",
                color: "#505050",
                bottom: "15px",
                wordWrap: "break-word",
                display: "block"
              }}>Unlock the Plagiarism Checker to guarantee all sources are </ListItem>

              <ListItem style={{
                fontfamily: "'Open Sans',sans-serif",
                fontweight: "400",
                fontSize: "19px",
                color: "#505050",
                bottom: "30px",
                wordWrap: "break-word",
                display: "block"
              }}>cited and nothing is unintentionally plagiarized.</ListItem>

              <LinearProgress variant="determinate" color='success' value={progress} style={{ width: "83%", display: "block", left: "16px", bottom: "25px", }} />

              <ListItem style={{
                fontSize: "23px",
                color: "#499557",
                fontWeight: "bold",
                bottom: "10px"
              }}>
                Compare all mode outputs at once
              </ListItem>
              <ListItem style={{
                fontfamily: "'Open Sans',sans-serif",
                fontweight: "400",
                fontSize: "19px",
                color: "#505050",
                bottom: "25px"
              }}>Paraphrase in and compare outputs from all seven modes.</ListItem>
              <LinearProgress variant="determinate" color='success' value={progress} style={{ width: "83%", display: "block", left: "16px", bottom: "25px", }} />
            </List>

          </div>
        </div>
      </div>

      <div className='partII' style={{
        justifyContent: "center",
        fontWeight: "normal",
        fontFamily: "'Open Sans',sans-serif",
        fontSize: "30px",
        fontStyle: "'Open Sans',sans-serif",
      }}>
        Upgrade Your Writing
      </div>
      <div style={{ display: 'flex' }}>
        <FreeTables />
        <PremiumTables />
      </div>

      <div style={{ alignItems: "center" }}>
        <p style={{ fontSize: "30px", marginBottom: "5px" }}>Write better, faster, and clearer instantly</p>
        <p style={{ marginTop: "10px", paddingBottom: "0px", fontSize: "18px", marginBottom: "5px" }}>QuillBot is trusted by students, professional writers, and</p>
        <p style={{ fontSize: "18px", marginTop: "0px" }}> business people who want to write more effectively.</p>
      </div>

      <div style={{ display: "flex", marginBottom: "50px", marginLeft: "200px", marginTop: "50px" }}>
        <Progress />

      </div>

      <Fab variant="extended" style={{
        borderRadius: 35,
        backgroundColor: "#499557",
        padding: "18px 36px",
        fontSize: "15px",
        color: "white",
        fontWeight: "bold"
      }}>
        Upgrade to Premium
      </Fab>

    </>

  );
};

export default PremiumPage;
