

import Superadminheader from "../Common/Superadminheader";
import './Adminhome.css';

const Superadminhome = () =>{
    return(
        <div>
            <Superadminheader/>
            <div className="row m-auto justify-content-center adminhome-base">
                <div className="col-9 adminhome-main">
                    Welcome <br />To <br/>Adminstration
                </div>
            </div>
        </div>
    );
}


export default Superadminhome;