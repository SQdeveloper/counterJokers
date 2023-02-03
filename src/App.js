import { useState } from 'react';
import './App.css';
import ShowJokeys from './components/pure/ShowJokeys';

function App() {
  const [like, setLike] = useState(0);
  const [dislike, setDislike] = useState(0);
  const [valueLike, setValueLike] = useState(false);
  const [valueDislike, setValueDislike] = useState(false);
  const [flag, setFlag] = useState(true);
  const [counterLike, setCounterLike] = useState(0);
  const [counterDislike, setCounterDislike] = useState(0);

  const restartValues = ()=>{
    setLike(0)
    setDislike(0)
    setValueLike(false)
    setValueDislike(false)
    setFlag(true);
  }

  const aumentCounterLike = ()=>{
    setCounterLike(counterLike + 1);
  }

  const aumentCounterDislike = ()=>{
    setCounterDislike(counterDislike + 1);
  }

  const alike = ()=>{
    if(valueLike === false ) {
      setLike(1);
      setValueLike(true);
      setFlag(true);
      setValueDislike(false);
      if(dislike > 0) {
        setDislike(0);
      }
    }

  }
  const adislike = ()=>{
    if(flag === true) {
      if(like > 0) {
        setLike(0);
      }
      setFlag(false);
    }
    if(valueDislike === false) {
      setDislike(1);
      setValueLike(false);
      setValueDislike(true);
    }

  }

  return (
    <div className="App">
      <h1>Jokeys about Shukt Norris</h1>
      <ShowJokeys aumentCounterLike={aumentCounterLike} restartValues={restartValues} aumentCounterDislike={aumentCounterDislike} valueLike={valueLike} valueDislike={valueDislike}/>
      <div>
        <button onClick={adislike}>dislike</button>
        <button onClick={alike}>like</button>
      </div>
      <div style={{marginTop:'2em'}}>
      <h2>Likes</h2>
        <span className='red'>{counterDislike + dislike}</span>
        <span className='green'>{counterLike + like}</span>
      </div>
    </div>
  );
}

export default App;
