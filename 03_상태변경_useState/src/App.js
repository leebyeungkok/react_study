import React, {useState} from 'react';
import './App.css';

function App() {
  const placeHolder = '이름을 입력해 주세요';
  const searchIcon = 'fa fa-search';
  const myStyle = {backgroundColor:'lightyellow'};
  //let username = '홍길동';
  const [username, setUsername] = useState('홍길동');
  const handlerSearch = () =>{
    //alert('search');
    setUsername('임꺽정');
  }
  const handlerChangeUsername = (e)=>{
    setUsername(e.target.value);
  }
  return (
    <div className="App">
      <form className="example" action="action_page.php">
        <input style={myStyle} 
        type="text" placeholder={placeHolder} name="search" 
        value={username} 
        onChange={handlerChangeUsername}/>
        <button type="button" onClick={ handlerSearch}><i className={searchIcon}></i></button>
      </form>
    </div>
  );
}

export default App;
