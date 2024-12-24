import React from 'react';
import sidebar from "./images/bg-sidebar-desktop.svg";
function Side(){
    return(
        <div className='container1'>
            <div className='container11'>
                <img className='sidebar' src={sidebar}/>
                <div className='numbers'>
                    <p>1</p>
                    <p>2</p>
                    <p>3</p>
                    <p>4</p>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Side;
