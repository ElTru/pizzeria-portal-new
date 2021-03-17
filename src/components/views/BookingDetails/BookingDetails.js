import React from 'react';
import styles from './BookingDetails.module.scss';
import PropTypes from 'prop-types';

const BookingDetails = ({ match }) => (
  <div className={styles.component}>
    <h2>Booking Details view</h2>
    <span>{match.params.id}</span>
  </div>
);

BookingDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default BookingDetails;
