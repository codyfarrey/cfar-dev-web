import HomeIcon from '../assets/home-icon.svg'
import ToolboxIcon from '../assets/toolbox-icon.svg'
import BankIcon from '../assets/bank-icon.svg'
import ChartIcon from '../assets/chart-icon.svg'
import MoneyIcon from '../assets/money-icon.svg'
import ProfileIcon from '../assets/profile-icon.svg'

import './Navbar.css'

export default function Navbar() {
    return(
        <nav>
            <div className="nav-left">
                <h1 className="nav-logo">{"<cfar.dev/>"}</h1>
            </div>

            <div className="nav-middle">
                <ul>
                    <li><img src={HomeIcon} /></li>
                    <li><img src={ToolboxIcon} /></li>
                    <li><img src={BankIcon} /></li>
                    <li><img src={ChartIcon} /></li>
                    <li><img src={MoneyIcon} /></li>
                </ul>
            </div>

            <div className="nav-right">
                <img src={ProfileIcon} />
            </div>
        </nav>
    );
}