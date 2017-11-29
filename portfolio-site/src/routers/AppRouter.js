import {BrowserRouter, Route, Switch} from 'react-router-dom';
import React from 'react';
import DashboardPage from '../components/DashboardPage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioViewPage from '../components/PortfolioViewPage';
import ContactPage from '../components/ContactPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (

   <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/>
                <Route path="/portfolio" component={PortfolioPage} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioViewPage} exact={true}/>
                <Route path="/contacts" component={ContactPage} />
                <Route component={NotFoundPage}/>
            </Switch>
        </div>

    </BrowserRouter>
);



export default AppRouter;

