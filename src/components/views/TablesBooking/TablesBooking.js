import React from 'react';
import classes from './TablesBooking.module.scss';
import PropTypes from 'prop-types';

const TablesBooking = props => {
  let content = this.props.params.id;
  if(props.match.params.id === 'new'){
    content = 'Book tables';
  }
  return (
    <div className={classes.component}>
      <h2>Tables Booking view</h2>
      <h3>{content}</h3>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default TablesBooking;
