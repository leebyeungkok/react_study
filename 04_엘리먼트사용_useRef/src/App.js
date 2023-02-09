import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const placeHolder = '이름을 입력해 주세요';
  const searchIcon = 'fa fa-search';
  const [username, setUsername] = useState('홍길동');
  const usernameRef = useRef(null);



  const handlerSearch = () =>{
    //alert('search');
    setUsername('임꺽정');
  }
  const handlerChangeUsername = (e)=>{
    setUsername(e.target.value);
  }
  const handlerFocus=()=>{
    usernameRef.current.style = 'background-color:lightyellow';
  }
  const handlerBlur=()=>{
    usernameRef.current.style = 'background-color:white';
  }
  return (
    <div className="App">
      <form className="example" action="action_page.php">
        <input 
        ref={usernameRef} 
        type="text" placeholder={placeHolder} name="search" 
        value={username} 
        onFocus = { handlerFocus}
        onBlur = { handlerBlur }
        onChange={handlerChangeUsername}/>
        <button type="button" onClick={ handlerSearch}><i className={searchIcon}></i></button>
      </form>
      <div style={{height:'10px'}}></div>
    </div>
  );
}

export default App;
