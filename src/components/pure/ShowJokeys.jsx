import React, { useEffect, useState } from 'react';
import CallApi from './CallApi';

const ShowJokeys = ({restartValues, aumentCounterLike, aumentCounterDislike, valueLike, valueDislike}) => {
    const [jokey, setJokey] = useState({});

    function changeCounter() {
        if(valueLike > valueDislike){ 
            aumentCounterLike();
        }
        else if(valueLike < valueDislike){
            aumentCounterDislike();
        }
    }

    function changeJokey() {
        CallApi().then(response => {
            setJokey(response.data);
        });
        changeCounter();
        restartValues();
    }

    useEffect(
        ()=>{
            CallApi().then(response => {
                setJokey(response.data);
            })
        },[]
    );

    return (
        <div className='text'>
            <p>{jokey.value}</p>
            <button onClick={changeJokey}>Change Jokey</button>
        </div>
    );
}

export default ShowJokeys;