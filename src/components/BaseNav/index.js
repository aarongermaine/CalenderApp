import React from 'react';
import { Route, Switch } from "react-router-dom";

import Account from '../Account';
import Calendar from '../Calender';
//import LogOut from '../LogOut'

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Switch>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
      <BottomNavigationAction label="Calender" icon={<CalendarTodayIcon />} />
      <BottomNavigationAction label="Log Out" icon={<ExitToAppIcon />} />
    </BottomNavigation>
    </Switch>
  );
}
