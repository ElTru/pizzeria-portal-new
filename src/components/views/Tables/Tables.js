import React from 'react';
import styles from './Tables.module.scss';
import { Link, Switch, Route } from 'react-router-dom';

import Button from '@material-ui/core/Button';

import NewBooking from '../NewBooking/NewBooking';
import BookingDetails from '../BookingDetails/BookingDetails';
import NewEvent from '../NewEvent/NewEvent';
import EventsDetails from '../EventsDetails/EventsDetails';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', status: 'free', order: null},
  {id: '2', status: 'booked', order: null},
];

const renderActions = status => {
  switch (status) {
    case 'free':
      return (
        <>
          <Button>free</Button>
        </>
      );
    case 'booked':
      return (
        <>
          <Button>booked</Button>
        </>
      );
    default:
      return null;
  }
};

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables overview</h2>
    <div style={{ display: 'inline-flex' }}>
      <h3>Bookings</h3>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>NEW BOOKING</Button>
    </div>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/tables/booking/:id/`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <div style={{ display: 'inline-flex' }}>
      <h3>Events</h3>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>NEW EVENT</Button>
    </div>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Table 1</TableCell>
            <TableCell>Table 2</TableCell>
            <TableCell>Table 3</TableCell>
            <TableCell>Table 4</TableCell>
            <TableCell>Table 5</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.status}
              </TableCell>
              <TableCell>
                {row.order && (
                  <Button to={`${process.env.PUBLIC_URL}/tables/event/:id/`}>
                    {row.order}
                  </Button>
                )}
              </TableCell>
              <TableCell>
                {renderActions(row.status)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <Switch>
      <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingDetails} />
      <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
      <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventsDetails} />
      <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
    </Switch>
  </div>
);

export default Tables;
