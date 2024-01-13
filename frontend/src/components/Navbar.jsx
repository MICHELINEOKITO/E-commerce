
import { MdLocalShipping } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { FiLogIn } from "react-icons/fi";
import './navbar.css';


const Navbar= () =>{
    

    return(
        <div className="header">
            <div className="top-header">
                <div className="icon">
                    <MdLocalShipping />
                </div>
                <div className="info">
                    <p>Free shipping when shopping upto $1000</p>

                </div>

            </div>
            <div className="mid-header">
                <div className="logo">
                    <span>EBIBI</span>
                </div>

                <div className="search-box">
                    <input type="text" placeholder="search" value=""/>
                    <button><CiSearch /></button>
                </div>

                <div className="user">
                    <div className="icon">
                        <FiLogIn />
                    </div>
                    <div className="btn">
                        <button>Login</button>

                    </div>
                </div>


            </div>
        </div>
    )
}
export default Navbar;