import React from 'react';
import MainLayout from './components/layout/MainLayout/MainLayout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Login from './components/views/Login/Login';
import Homepage from './components/views/Homepage/Homepage';
import Kitchen from './components/views/Kitchen/Kitchen';
import Tables from './components/views/Tables/Tables';
import BookingDetails from './components/views/BookingDetails/BookingDetails';
import NewBooking from './components/views/NewBooking/NewBooking';
import EventsDetails from './components/views/EventsDetails/EventsDetails';
import NewEvent from './components/views/NewEvent/NewEvent';
import Waiter from './components/views/Waiter/Waiter';
import WaiterOrderNew from './components/views/WaiterOrderNew/WaiterOrderNew';

import { StylesProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: { main: '#2B4C6F' },
    //secondary: { main: '#11cb5f' },
  },
});

const App = () => (
  <BrowserRouter basename={'/panel'}>
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <MainLayout>
          <Switch>
            <Route exact path={`${process.env.PUBLIC_URL}/`} component={Homepage} />
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login} />
            <Route exact path={process.env.PUBLIC_URL + '/kitchen'} component={Kitchen} />
            <Route exact path={process.env.PUBLIC_URL + '/tables'} component={Tables} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter'} component={Waiter} />
            <Route exact path={process.env.PUBLIC_URL + '/waiter/order/:id'} component={WaiterOrderNew} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/:id'} component={BookingDetails} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/booking/new'} component={NewBooking} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/:id'} component={EventsDetails} />
            <Route exact path={process.env.PUBLIC_URL + '/tables/events/new'} component={NewEvent} />
          </Switch>
        </MainLayout>
      </ThemeProvider>
    </StylesProvider>
  </BrowserRouter>
);

export default App;
