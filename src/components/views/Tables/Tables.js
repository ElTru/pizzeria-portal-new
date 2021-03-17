import React from 'react';
import classes from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = props => {
  return (
    <div className={classes.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/:id`}>Booking Details</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/new`}>New Booking</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/:id`}>Events Details</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/new`}>Add Event</Link>
    </div>
  );
};

export default Tables;
