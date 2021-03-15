import React from 'react';
import classes from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = props => {
  return (
    <div className={classes.component}>
      <h2>Waiter view</h2>
      <Link to={process.env.PUBLIC_URL + `/waiter/order/new`}>New Order</Link>
      <Link to={process.env.PUBLIC_URL + `/tables/order/:id`}>Edit any order</Link>
    </div>
  );
};

export default Waiter;