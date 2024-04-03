import { Outlet } from "react-router-dom";
import { TABS } from "../../constants";
import {NavTab} from '../../common/NavTab'
import "./dashboard.css";
import './BestMatch/utils'
import NavBar from "../../common/NavBar";

function Dashboard() {
  const {PETS, ADOPTERS, BEST_MATCH} = TABS
  return (
    <>
      <NavBar navItems={['pets','adopters', 'bestmatch']}/>
      {/* <div className="tabs">
        <NavTab path='pets'>{PETS}</NavTab>
        <NavTab path='adopters'>{ADOPTERS}</NavTab>
        <NavTab path='bestmatch'>{BEST_MATCH}</NavTab>
      </div> */}
      <Outlet />
      
    </>
  );
}

export default Dashboard;
