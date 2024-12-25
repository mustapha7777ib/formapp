import sidebar from "./images/bg-sidebar-desktop.svg";
import React, { useState, useEffect } from 'react';
function Side(props){
    const [onnumber1,setonnumber1] = useState(false)
    const [onnumber2,setonnumber2] = useState(false)
    useEffect(() => {
        if (props.button == false) {
            console.log("ie");
            setonnumber1(false);
        } 
        else if(props.button == true && props.third == true) {
            console.log("ie3");
            setonnumber1(true);
            setonnumber2(true);
        }
        else if(props.third == false && props.button == true) {
            console.log("ie2");
            setonnumber1(true);
            setonnumber2(false);

        }
        else {
            console.log("ie4");
            setonnumber1(false);
        }
    }, [props.button]);
    return(
        <div className='container1'>
            <img className='sidebar' src={sidebar}></img>
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
                    <p className={`${onnumber1 && onnumber2? 'numbers1' : 'numbers'}`}>3</p>
                    <div className='stuff'>
                        <p className='stuff1'>STEP 3</p>
                        <p className='stuff2'>ADD-ONS</p>
                    </div>
                </div>
                <div className='blocks'>
                    <p className='numbers'>4</p>
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
