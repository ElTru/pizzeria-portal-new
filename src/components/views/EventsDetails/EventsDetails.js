import React from 'react';
import PropTypes from 'prop-types';
import styles from './EventsDetails.module.scss';

const EventsDetails = ({ match }) => (
  <div className={styles.component}>
    <h2>Event Details</h2>
    <hr />
    <span>{match.params.id}</span>
  </div>
);

EventsDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }),
};

export default EventsDetails;
