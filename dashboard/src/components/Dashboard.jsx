import React from 'react';
import { Route, Routes } from "react-router-dom";

import WatchList from './WatchList';
import Summary from './Summary';
import Orders from './Orders';
import Holdings from './Holdings';
import Positions from './Positions';
import Funds from './Funds';
import App from './App';

function Dashboard() {
    return ( 
        <div className="dashboard-container">
            <WatchList/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Summary/>}></Route>
                    <Route path="/orders" element={<Orders/>}></Route>
                    <Route path="/holdings" element={<Holdings/>}></Route>
                    <Route path="/positions" element={<Positions/>}></Route>
                    <Route path="/funds" element={<Funds/>}></Route>
                    <Route path="/apps" element={<App/>}></Route>
                </Routes>
            </div>
        </div>
     );
}

export default Dashboard;