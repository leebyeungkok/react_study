import React, {useState, useRef} from 'react';
const UsersSearch =({userNameInit})=>{
  const placeHolder = '이름을 입력해 주세요';
  const searchIcon = 'fa fa-search';
  const [username, setUsername] = useState('홍길동');
  const usernameRef = useRef(null);
  const handlerChangeUsername = (e)=>{
    setUsername(e.target.value);
  }
  const handlerFocus=()=>{
    usernameRef.current.style = 'background-color:lightyellow';
  }
  const handlerBlur=()=>{
    usernameRef.current.style = 'background-color:white';
  }
  const handlerSearch=() =>{

  }
  return (
    <form className="example" action="action_page.php">
      <input 
      ref={usernameRef} 
      type="text" placeholder={placeHolder} name="search" 
      value={userNameInit} 
      onFocus = { handlerFocus}
      onBlur = { handlerBlur }
      onChange={handlerChangeUsername}/>
      <button type="button" onClick={ handlerSearch}><i className={searchIcon}></i></button>
    </form>
  )
}
export default UsersSearch;