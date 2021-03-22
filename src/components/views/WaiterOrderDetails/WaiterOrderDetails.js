import React from 'react';
import PropTypes from 'prop-types';
import styles from './WaiterOrderDetails.module.scss';

const WaiterOrderDetails = props => (
  <div className={styles.component}>
    <h2>Order Details</h2>
    <span>{props.match.params.id}</span>
  </div>
);

WaiterOrderDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default WaiterOrderDetails;
