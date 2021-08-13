import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Account from '../Account';
import Calender from '../Calender';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Router>
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <Link to="/account" component={Account}>
      <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
      </Link>
      <Link to="/calender" component={Calender}>
      <BottomNavigationAction label="Calender" icon={<CalendarTodayIcon />} />
      </Link>
      <BottomNavigationAction label="Log Out" icon={<ExitToAppIcon />} />
      <Switch>
      <Route path="/account" exact component={Account} />
      <Route path="/calender"  component={Calender} />
      </Switch>
    </BottomNavigation>
    </Router>
  );
}
