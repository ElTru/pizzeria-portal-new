import React from 'react';
import styles from './Tables.module.scss';
import { Link, NavLink, Switch, Route } from 'react-router-dom';

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

const demoContentBookings = [
  {id: '1', name: 'Alex', phone: '1752543927', hours: '14:00 - 16:30', table: 2},
  {id: '2', name: 'Tomas', phone: '5983415248', hours: '13:30 - 14:00', table: 1},
  {id: '3', name: 'Blanka', phone: '6252541863', hours: '17:30 - 21:00', table: 1},
  {id: '4', name: 'Katy', phone: '3627485192', hours: '17:00 - 21:00', table: 2},
  {id: '5', name: 'John', phone: '3748449271', hours: '22:00 - 00:00', table: 3},
  {id: '6', name: 'Tomas', phone: '5983415248', hours: '12:00 - 13:00', table: 2},
];

const Tables = () => (
  <div className={styles.component}>
    <h2>Tables</h2>
    <hr />
    <div style={{ display: 'inline-flex' }}>
      <h3>Bookings</h3>
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/booking/new`} activeClassName='active'>NEW BOOKING</Button>
    </div>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Booking Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentBookings.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.hours}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/booking/:id`} activeClassName='active'>Edit</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>

    <div style={{ display: 'inline-flex' }}>
      <h3>Events</h3>
      <hr />
      <Button component={Link} to={`${process.env.PUBLIC_URL}/tables/events/new`} activeClassName='active'>NEW EVENT</Button>
    </div>
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Client</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Hour</TableCell>
            <TableCell>Table</TableCell>
            <TableCell>Event Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContentBookings.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>
                {row.phone}
              </TableCell>
              <TableCell>
                {row.hours}
              </TableCell>
              <TableCell>
                {row.table}
              </TableCell>
              <TableCell>
                <Button component={NavLink} to={`${process.env.PUBLIC_URL}/tables/events/:id`} activeClassName='active'>Edit</Button>
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
