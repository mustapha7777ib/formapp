import React from 'react';
import Side from './side.jsx';
import Info from './info.jsx';

function Body(){
    return(
        <>
        <div className='container'>
            <Side/>
            <Info/>
        </div>
        </>
    )
}

export default Body;
