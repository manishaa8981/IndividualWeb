import "../css/homePage.css"
import { FaSearch} from "react-icons/fa";
import HomeNavbar from "./Navbar&Modals/HomeNavbar.tsx";
import {useLocation} from "react-router-dom";

const HomePage = () => {

    const location = useLocation(); // Use useLocation to get the current location
    const currentLocation = location.pathname;

    return(
        <>
            <div className={"home-page"}>
                <div className={"hp-first-div"}>
                    <HomeNavbar activePage={currentLocation} />
                    <div className={"hp-main-container"}>
                        <div className={"feast-slogan"}>
                            <h1>Savor the flavor Straight to your door.</h1>
                        </div>
                        <div className={"hp-search-wrapper"}>
                            <input type={"search"} placeholder={"Search Your Food Here..."}/>
                            <span><FaSearch/></span>
                        </div>
                    </div>
                </div>

                <div className={"hp-second-div"}>
                    second div
                </div>
            </div>
        </>
    )
}

export default HomePage