import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import RoboduckyVisual from './RoboDuckyVisual';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  buttonStyle: {
    color: "white",
    backgroundColor: "primary"
  }
}));

const PersonalizedWelcome = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} elevation={0} justify="center">
        <Grid container spacing={3} justify="center">
          <Grid item xs={12} style={{ justifyContent: "center", display: "flex" }}>
            
              <RoboduckyVisual size='400'/>

          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper} elevation={0}>
              <Typography component="h1" variant="h5">
                Hey --- Platzhalter ---
              </Typography>
              <br />
              <Typography component="h1" variant="h6">
                I hope you have a nice day. <br />
              </Typography>
              <Typography variant="body2" gutterBottom>
                <br /> 
                I'm here if you need me.
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
              <Button component={Link} to={'/my_route'} className="buttonStyle">
                  log out
              </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
                <Button component={Link} to={'/login'} className="buttonStyle">
                  
                </Button>
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Paper className={classes.paper} elevation={0}>
                <Button component={Link} to={'/login'} className="buttonStyle">
                  log in
                </Button>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default PersonalizedWelcome;





/* ///////// Get human readable time stamp /////////
const getTimeStamp = () => {
  const date = Date(Date.now()); 
  let today = new Date();
  let day = today.getDate() + "";
  let month = (today.getMonth() + 1) + "";
  let year = today.getFullYear() + "";
  let hour = today.getHours() + "";
  let minutes = today.getMinutes() + "";
  let seconds = today.getSeconds() + "";

  const checkZero = (data) => {
    if(data.length == 1){
      data = "0" + data;
    }
    return data;
  }

  day = checkZero(day);
  month = checkZero(month);
  year = checkZero(year);
  hour = checkZero(hour);
  minutes = checkZero(minutes);
  seconds = checkZero(seconds);

  const timeStamp = day + "." + month + "." + year + " - " + hour + ":" + minutes + ":" + seconds;
  return timeStamp
} */