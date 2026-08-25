import React, { useState } from 'react';
import {Link} from "react-router-dom"

function Menu() {
    const [selectedMenu, setSelectedMenu] = useState(0); // dashboard selected
    const [isProfileDropDownOpen, setIsProfileDropDownOpen] = useState(false);

    const handleMenuClick = (index) => {
        setSelectedMenu(index);
    };
    const handleProfileClick = (index) => {
        setIsProfileDropDownOpen(!isProfileDropDownOpen); // agr open h te close; nite open;
    };

    const menuClass = "menu";
    const activeMenuClass = "menu selected";

    return ( 
        <div className="menu-container">
            <img src="kite-logo.svg" style={{width:"4%", margin:"2rem"}}/>
            <div className="menus">
                <ul>
                    <li> <Link to="/" onClick={()=> handleMenuClick(0)}
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 0? activeMenuClass:menuClass}>
                                Dashboard
                            </p> 
                        </Link>
                    </li>
                    
                    <li> 
                        {/* // making routes */}
                        <Link to="/orders" onClick={()=> handleMenuClick(1)}
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 1? activeMenuClass:menuClass}>
                                Orders
                            </p> 
                        </Link>
                    </li>
                        
                    <li>
                        <Link to="/holdings" onClick={()=> handleMenuClick(2)}
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 2? activeMenuClass:menuClass}>
                                Holdings
                            </p> 
                        </Link>
                    </li>

                    <li>
                        <Link to="/positions" onClick={()=> handleMenuClick(3)}
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 3? activeMenuClass:menuClass}>
                                Positions
                            </p> 
                        </Link>
                    </li>

                    <li>
                        <Link to="/funds" onClick={()=> handleMenuClick(4)}
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 4? activeMenuClass:menuClass}>
                                Funds
                            </p> 
                        </Link>
                    </li>
                    <li>
                        <Link to="/apps" onClick={()=> handleMenuClick(5)} 
                            style={{ textDecoration:"none" }}> 
                            <p className= {selectedMenu === 5? activeMenuClass:menuClass}>
                                Apps
                            </p> 
                        </Link>
                    </li>
                </ul>
                <hr />

                <div className="profile" onClick={handleProfileClick}>
                    <div className="avatar">ZU</div>
                    <p className='username'>User ID</p>
                </div>
            
            </div>
        </div>
     );
}

export default Menu;