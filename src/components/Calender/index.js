import React from "react";

import moment from 'moment'

let weekdayshort = moment.weekdaysShort();

let weekdayshortname = this.weekdayshort.map(day => {
  return (
    <th key={day} className="week-day">
     {day}
    </th>
  );
});
//import { Grid, TextField, Button } from '@material-ui/core';

export default class Calendar extends React.Component {
    render() {
      return (
        <div>
          <h2>My Calendar</h2>
        </div>
      );
    }
  }