import React from 'react';
import { useState } from 'react';
import Side from "./side.jsx"
import icon1 from "./images/icon-arcade.svg"
import icon2 from "./images/icon-advanced.svg"
import icon3 from "./images/icon-pro.svg"
function Info(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [namebutton,setnamebutton] = useState(false)
    const [phonebutton,setphonebutton] = useState(false)
    const [emailbutton,setemailbutton] = useState(false)
    const [allbutton,setallbutton] = useState(false)
    const [toggle, settoggle] = useState(true);
    const [color1, setcolor1] = useState(true);
    const [color2, setcolor2] = useState(true);
    const [color3, setcolor3] = useState(true);
    const [third, setthird] = useState(false);

    var n = 2;
    const handleclick = () => {
        if(name.trim() === ''){
            console.log("Input is empty");
            setnamebutton(true);
        }
        if(name.trim() != ''){
            console.log("Input is not empty");
            setnamebutton(false);
        }
        if(email.trim() === ''){
            console.log("Input is empty");
            setemailbutton(true);
        }
        if(email.trim() != ''){
            console.log("Input is not empty");
            setemailbutton(false);
        }
        if(phone.trim() === ''){
            console.log("Input is empty");
            setphonebutton(true);
        }
        if(phone.trim() != ''){
            console.log("Input is not empty");
            setphonebutton(false);
        }
        if (name.trim() != '' && email.trim() != '' && phone.trim() != ''){
            setallbutton(true);
        }
        }

        const handleclick2 = () => {
            settoggle((prevToggle) => !prevToggle); // Toggle the state directly
        };
        const handleclick3 = () => {
            setallbutton(false);
        };
        const handleclick4 = () => {
            setcolor1(false);
            setcolor2(true);
            setcolor3(true);
        };
        const handleclick5 = () => {
            setcolor2(false);
            setcolor1(true);
            setcolor3(true);
        };
        const handleclick6 = () => {
            setcolor3(false);
            setcolor1(true);
            setcolor2(true);
        };
        const handleclick7 = () => {
            setthird(true);
            setallbutton(true);
        };
    return(
        <>
        <Side button = {allbutton} third={third}/>
        <div className={`${allbutton ? 'container2second' : 'container2'}`}>
            <div className='container21'>
                <h1>Personal info</h1>
                <p className='please' >Please provide your name, email address, and phone number.</p>
            </div>
            <div className='container22'>
                <div className='bodies'>
                    <p className='stands'>Name</p>
                    <input 
                        onChange={(e) => setName(e.target.value)} 
                        className="inputer" 
                        id={namebutton ? 'red-border' : ''} 
                        placeholder="    e.g. Stephen King" >
                    </input>
                    <p className={`${namebutton ? 'return1' : 'return'}`}>This field is required</p>
                </div>
                <div className='bodies'>
                    <p className='stands'>Email Address</p>
                    <input 
                        onChange={(e) => setEmail(e.target.value)} 
                        className="inputer" 
                        id={emailbutton ? 'red-border' : ''} 
                        placeholder="    e.g. stephenking@lorem.com">
                    </input>
                    <p className={`${emailbutton ? 'return1' : 'return'}`}>This field is required</p>
                </div>
                <div className='bodies'>
                    <p className='stands'>Phone Number</p>
                    <input 
                        onChange={(e) => setPhone(e.target.value)} 
                        className="inputer" 
                        id={phonebutton ? 'red-border' : ''} 
                        placeholder="    e.g. +1 234 567 890" >
                    </input>
                    <p className={`${phonebutton ? 'return1' : 'return'}`} >This field is required</p>
                </div>
            </div>
            <div className='container23'>
                <button onClick={() => handleclick()} className='button'>Next Step</button>
            </div>
        </div>
        <div className={`${allbutton !== third ? 'container3second' : 'container3'}`}>
            <div className='container21'>
                <h1>Select your plan</h1>
                <p className='please' >You have the option of monthly or yearly billing.</p>
            </div>
            <div className='container22second'>
                <div onClick={() => handleclick4()} className={`${color1 ? 'bodiess' : 'bodiess2'}`}>
                    <img className='icon' src={icon1}></img>
                    <p className='value a'>Arcade</p>
                    <p className='value b'>$9/mo</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
                <div onClick={() => handleclick5()} className={`${color2 ? 'bodiess' : 'bodiess2'}`}>
                    <img  className='icon' src={icon2}></img>
                    <p className='value a'> Advanced</p>
                    <p className='value b'>$12/mo</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
                <div onClick={() => handleclick6()} className={`${color3 ? 'bodiess c' : 'bodiess2 c'}`}>
                    <img className='icon' src={icon3}></img>
                    <p className='value a'>Pro</p>
                    <p className='value b'>$15/mo</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
            </div>
            <div className="toggle">
                <p className={`${toggle ? 'days' : 'days1'}`}>Monthly</p>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={!toggle} // Reflect the toggle state
                        onChange={() => settoggle(!toggle)} // Toggle the state on click
                    />
                    <span className="slider round"></span>
                </label>
                <p className={`${toggle ? 'days1' : 'days'}`}>Yearly</p>
            </div>

            <div className='container23second'>
                <button onClick={() => handleclick3()} className='button2'>Go back</button>
                <button onClick={() => handleclick7()} className='button'>Next Step</button>
            </div>
        </div>
        <div className={`${allbutton && third ? 'container4second' : 'container4'}`}>
            <div className='container21'>
                    <h1>Pick add-ons</h1>
                    <p className='please' >Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='container22third'>
                <div className='bodiesss'>
                    <div>
                        <input className='checkbox' type='checkbox'></input>
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Online service</p>
                        <p className='e'>Access to multiplayer games</p>
                    </div>
                    <div>
                        <p className='price'>+$1/mo</p>
                    </div>      
                </div>
                <div className='bodiesss'>
                    <div>
                        <input className='checkbox' type='checkbox'></input>
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Larger Storage</p>
                        <p className='e'>Extra 1TB of cloud save</p>
                    </div>
                    <div>
                        <p className='price'>+$2/mo</p>
                    </div>    
                </div>
                <div className='bodiesss'>
                    <div>
                        <input  className='checkbox'type='checkbox'></input>
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Customizable Profile</p>
                        <p className='e'>Custom theme on your profile</p>
                    </div>
                    <div className='price'>
                        <p>+$2/mo</p>
                    </div>   
                </div>
            </div>
            <div className='container23second'>
                <button onClick={() => handleclick3()} className='button2'>Go back</button>
                <button onClick={() => handleclick7()} className='button'>Next Step</button>
            </div>
        </div>
        </>
    )
}

export default Info;
