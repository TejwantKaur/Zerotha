import React, { useState } from "react";

import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { watchlist } from "../data/data";
import { DoughnutChart } from "./DoughnutChart";

const labels = watchlist.map((subarray) => subarray["name"]);

function WatchList() {

  const data = {
    labels,
    datasets: [ 
      {
        label: '# of Votes',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)', // opacity: 0.5 more dark;
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
        ], 
        borderColor: [
          'rgba(255, 99, 132, 0.3)',
          'rgba(54, 162, 235, 0.3)',
          'rgba(255, 206, 86, 0.3)',
          'rgba(75, 192, 192, 0.3)',
          'rgba(153, 102, 255, 0.3)',
          'rgba(255, 159, 64, 0.3)',
        ],
        borderWidth: 0.5,
      }
    ]
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty, gold mcx"
          className="search"
        />

        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock, index) => {
          return <WatchListItem stock={stock} key={index} />;
        })}
        {/* { watchlist.map ((stock, index) => {
                    return <p>{stock.name}</p>
            })} */}
      </ul>
      <DoughnutChart data={data}/>
    </div>
  );
}

export default WatchList;

// mtlb jida e hover hoya, odia saria options available hojan gia;
// buy sell and more buttons
const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  //  on hover
  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  };
  const handleMouseLeave = (e) => {
    setShowWatchListActions(false);
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="item-info">
          <span className="percent">{stock.percent}</span>
          {
            stock.isDown ? (
              <KeyboardArrowDown className="down" />
            ) : (
              <KeyboardArrowUp className="down" />
            ) // red color arrow
          }
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  );
};

// every item te jdo hover hoyega, odia options show
const WatchListActions = ({ uid }) => {
  return (
    <span className="actions">
      <span>
        {/* TransitionComponent: hover hon te size vdda hoyega */}
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          transitioncomponent={Grow}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          transitioncomponent={Grow}
        >
          {" "}
          <button className="sell">Sell</button>
        </Tooltip>

        <Tooltip
          title="Analytics (B)"
          placement="top"
          arrow
          transitioncomponent={Grow}
        >
          {" "}
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow transitioncomponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
