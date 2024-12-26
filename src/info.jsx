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
    const [fourth, setfourth] = useState(false);
    const [tick1, settick1] = useState(false);
    const [tick2, settick2] = useState(false);
    const [tick3, settick3] = useState(false);

    const handleclick = () => {
        if(name.trim() === ''){
            setnamebutton(true);
        }
        if(name.trim() != ''){
            setnamebutton(false);
        }
        if(email.trim() === ''){
            setemailbutton(true);
        }
        if(email.trim() != ''){
            setemailbutton(false);
        }
        if(phone.trim() === ''){
            setphonebutton(true);
        }
        if(phone.trim() != ''){
            setphonebutton(false);
        }
        if (name.trim() != '' && email.trim() != '' && phone.trim() != ''){
            setallbutton(true);
        }
        }
        const handleclick3 = () => {
            setallbutton(false);
        };
        const handleclick4 = () => {
            setcolor1(true);
            setcolor2(true);
            setcolor3(true);
        };
        const handleclick5 = () => {
            setcolor2(false);
            setcolor1(false);
            setcolor3(true);
        };
        const handleclick6 = () => {
            setcolor3(false);
            setcolor1(false);
            setcolor2(true);
        };
        const handleclick7 = () => {
            setthird(true);
            setallbutton(true);
        };
        const handleclick8 = () => {
            setthird(false);
        };
        const handleclick9 = () => {
            settick1((prevTick) => !prevTick);
        };
        
        const handleclick10 = () => {
            settick2((prevTick) => !prevTick);
        };
        
        const handleclick11 = () => {
            settick3((prevTick) => !prevTick);
        };
        const handleclick12 = () => {
            setfourth(true);
        };
        const handleclick13 = () => {
            setfourth(false);
        };
        
    return(
        <>
        <Side button = {allbutton} third={third} fourth={fourth}/>
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
                <div onClick={() => handleclick4()} className={`${color1 ? 'bodiess2' : 'bodiess'}`}>
                    <img className='icon' src={icon1}></img>
                    <p className='value a'>Arcade</p>
                    <p className={`${toggle ? 'nohide' : 'hide'}`}>$9/mo</p>
                    <p className={`${toggle ? 'hide' : 'nohide'}`}>$90/yr</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
                <div onClick={() => handleclick5()} className={`${color2 ? 'bodiess' : 'bodiess2'}`}>
                    <img  className='icon' src={icon2}></img>
                    <p className='value a'>Advanced</p>
                    <p className={`${toggle ? 'nohide' : 'hide'}`}>$12/mo</p>
                    <p className={`${toggle ? 'hide' : 'nohide'}`}>$120/yr</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
                <div onClick={() => handleclick6()} className={`${color3 ? 'bodiess c' : 'bodiess2 c'}`}>
                    <img className='icon' src={icon3}></img>
                    <p className='value a'>Pro</p>
                    <p className={`${toggle ? 'nohide' : 'hide'}`}>$15/mo</p>
                    <p className={`${toggle ? 'hide' : 'nohide'}`}>$150/yr</p>
                    <p className={`${toggle ? 'tobehidden' : 'tobehidden2'}`}>2 months free</p>
                </div>
            </div>
            <div className="toggle">
                <p className={`${toggle ? 'days' : 'days1'}`}>Monthly</p>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={!toggle}
                        onChange={() => settoggle(!toggle)}
                    />
                    <span className="slider round"></span>
                </label>
                <p className={`${toggle ? 'days1' : 'days'}`}>Yearly</p>
            </div>

            <div className='container23second'>
                <button onClick={() => handleclick3()} className='button4'>Go back</button>
                <button onClick={() => handleclick7()} className='button3'>Next Step</button>
            </div>
        </div>
        <div className={`${allbutton && third !== fourth? 'container4second' : 'container4'}`}>
            <div className='container21'>
                    <h1>Pick add-ons</h1>
                    <p className='please' >Add-ons help enhance your gaming experience.</p>
            </div>
            <div className='container22third'>
                <div onClick={handleclick9} className={`${tick1 ? 'bodiesss2' : 'bodiesss'}`}>
                    <div>
                        <input
                            checked={tick1}
                            className='checkbox'
                            type='checkbox'
                            readOnly
                        />
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Online service</p>
                        <p className='e'>Access to multiplayer games</p>
                    </div>
                    <div className='price'>
                        <p className={`${toggle ? 'nohide1' : 'hide1'}`}>+$1/mo</p>
                        <p className={`${toggle ? 'hide1' : 'nohide1'}`}>+$10/yr</p>
                    </div>
                </div>

                <div onClick={handleclick10} className={`${tick2 ? 'bodiesss2' : 'bodiesss'}`}>
                    <div>
                        <input
                            checked={tick2}
                            className='checkbox'
                            type='checkbox'
                            readOnly
                        />
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Larger Storage</p>
                        <p className='e'>Extra 1TB of cloud save</p>
                    </div>
                    <div className='price'>
                        <p className={`${toggle ? 'nohide1' : 'hide1'}`}>+$2/mo</p>
                        <p className={`${toggle ? 'hide1' : 'nohide1'}`}>+$20/yr</p>
                    </div>
                </div>

                <div onClick={handleclick11} className={`${tick3 ? 'bodiesss2' : 'bodiesss'}`}>
                    <div>
                        <input
                            checked={tick3}
                            className='checkbox'
                            type='checkbox'
                            readOnly
                        />
                    </div>
                    <div className='bodiesss1'>
                        <p className='d'>Customizable Profile</p>
                        <p className='e'>Custom theme on your profile</p>
                    </div>
                    <div className='price'>
                        <p className={`${toggle ? 'nohide1' : 'hide1'}`}>+$2/mo</p>
                        <p className={`${toggle ? 'hide1' : 'nohide1'}`}>+$20/yr</p>
                    </div>
                </div>
            </div>
            <div className='container23second'>
                <button onClick={() => handleclick8()} className='button6'>Go back</button>
                <button onClick={() => handleclick12()} className='button5'>Next Step</button>
            </div>

        </div>
        <div className={`${allbutton && third && fourth? 'container4second' : 'container4'}`}>
            <div className='container21'>
                <h1>Finishing up</h1>
                <p className='please'>Double-check everything looks OK before confirming.</p>
            </div>
            <div>
                <div>
                    <p className={`${color1 ? 'nohided1' : 'hided1'}`}>Arcade</p>
                    <p className={`${color2 ? 'hided1' : 'nohided1'}`}>Advanced</p>
                    <p className={`${color3 ? 'hided1' : 'nohided1'}`}>Pro</p>
                    <p className={`${toggle ? 'nohided1' : 'hided1'}`}> (Monthly)</p>
                    <p className={`${toggle ? 'hided1' : 'nohided1'}`}> (Yearly)</p>
                </div>
                <div>
                    
                </div>
                <div>

                </div>
            </div>

            <div className='container23second'>
                <button onClick={() => handleclick13()} className='button4'>Go back</button>
                <button onClick={() => handleclick14()} className='button3'>Next Step</button>
            </div>
        </div>
        </>
    )
}

export default Info;
