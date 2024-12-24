import React from 'react';

function Info(){
    return(
        <div className='container2'>
            <div className='container21'>
                <h1>Personal info</h1>
                <p className='please' >Please provide your name, email address, and phone number.</p>
            </div>
            <div className='container22'>
                <div className='bodies'>
                    <p className='stands'>Name</p>
                    <input className="inputer" placeholder="    e.g. Stephen King"></input>
                </div>
                <div className='bodies'>
                    <p className='stands'>Email Address</p>
                    <input className="inputer" placeholder="    e.g. stephenking@lorem.com"></input>
                </div>
                <div className='bodies'>
                    <p className='stands'>Phone Number</p>
                    <input className="inputer" placeholder="    e.g. +1 234 567 890"></input>
                </div>
            </div>
            <div className='container23'>
                <button className='button'>Next Step</button>
            </div>
        </div>
    )
}

export default Info;
