
import { MdLocalShipping } from "react-icons/md";
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
            <div className="middle-header">

            </div>
        </div>
    )
}
export default Navbar;