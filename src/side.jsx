import sidebar from "./images/bg-sidebar-desktop.svg";
import sidebar2 from "./images/bg-sidebar-mobile.svg";
import React, { useState, useEffect } from 'react';
function Side(props){
    const [onnumber1,setonnumber1] = useState(false)
    const [onnumber2,setonnumber2] = useState(false)
    const [onnumber3,setonnumber3] = useState(false)
    useEffect(() => {
        if (props.button === false) {
            setonnumber1(false);
        } 
        else if (props.third === false && props.button === true) {
            setonnumber1(true);
            setonnumber2(false);
            setonnumber3(false)
        }
        else if (props.button === true && props.third === true && props.fourth === false) {
            setonnumber1(true);
            setonnumber2(true);
            setonnumber3(false)
        }
        else if(props.button === true && props.third === true && props.fourth === true){
            setonnumber1(true);
            setonnumber2(true);
            setonnumber3(true)
        }
    }, [props.button, props.third, props.fourth]);
    
    return(
        <div className='container1'>
            <img className='sidebar' src={sidebar}></img>
            <img className='sidebar2' src={sidebar2}></img>
            <div className="container10">
                <p className={`${onnumber1 ? 'numbers' : 'numbers1'}`}>1</p>
                <p className={`${onnumber1 !== onnumber2? 'numbers1' : 'numbers'}`}>2</p>
                <p className={`${onnumber1 && onnumber2 !== onnumber3? 'numbers1' : 'numbers'}`}>3</p>
                <p className={`${onnumber1 && onnumber2 && onnumber3? 'numbers1' : 'numbers'}`}>4</p>
            </div>
            <div className='container11'>
                <div className='blocks'>
                    <p className={`${onnumber1 ? 'numbers' : 'numbers1'}`}>1</p>
                    <div className='stuff'>
                        <p className='stuff1'>STEP 1</p>
                        <p className='stuff2'>YOUR INFO</p>
                    </div>
                </div>
                <div className='blocks'>
                    <p className={`${onnumber1 !== onnumber2? 'numbers1' : 'numbers'}`}>2</p>
                    <div className='stuff'>
                        <p className='stuff1'>STEP 2</p>
                        <p className='stuff2'>SELECT PLAN</p>
                    </div>
                </div>
                <div className='blocks'>
                    <p className={`${onnumber1 && onnumber2 !== onnumber3? 'numbers1' : 'numbers'}`}>3</p>
                    <div className='stuff'>
                        <p className='stuff1'>STEP 3</p>
                        <p className='stuff2'>ADD-ONS</p>
                    </div>
                </div>
                <div className='blocks'>
                    <p className={`${onnumber1 && onnumber2 && onnumber3? 'numbers1' : 'numbers'}`}>4</p>
                    <div className='stuff'>
                        <p className='stuff1'>STEP 4</p>
                        <p className='stuff2'>SUMMARY</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Side;
