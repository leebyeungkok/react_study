import React, {useState, useRef} from 'react';
import './App.css';

function App() {
  const placeHolder = '이름을 입력해 주세요';
  const searchIcon = 'fa fa-search';
  const [username, setUsername] = useState('홍길동');
  const usernameRef = useRef(null);

  const [users, setUsers] = useState([
    {id:1, username:'홍길동', email:'temp.email.com'},
    {id:2, username:'임꺽정', email:'temp.email.com'},
    {id:3, username:'이순신', email:'temp.email.com'},
    {id:4, username:'강감찬', email:'temp.email.com'},
    {id:5, username:'을지문덕', email:'temp.email.com'},
    {id:6, username:'김종서', email:'temp.email.com'},
    {id:7, username:'신사임당', email:'temp.email.com'},
    {id:8, username:'안중근', email:'temp.email.com'},
    
  ])
  const [err, setErr] = useState('');
  const handlerSearch = () =>{
    fetch('https://jsonplaceholder.typicode.com/users',
    {method:'GET', headers:{'Content-Type':'application/json'}})
      .then((response => {
        console.log('response', response);
        if(!response.ok){
          console.log('err', response.status);
          setErr(response.status + ':' + response.statusText)
          return [];
        } else {
          setErr('');
          return response.json()
        }
        
      }))
      .then((data) => setUsers(data))
      .catch((err)=>{console.log(err)});
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
  const handlerAddUser = () =>{
    //setUsers([... users, { id:9, username:'세종대왕'}])
    //let bbb = JSON.parse(JSON.stringify(aaa));

    fetch('https://jsonplaceholder.typicode.com/users',
      {
        method:'POST', 
        headers:{'Content-Type':'application/json', 
        body:JSON.stringify({
          name:'steeve',
          username:'steeve',
          email:'test@test.com'
        })}})
      .then((response => {
        console.log('response', response.ok);
        if(!response.ok){
          console.log('err', response.status);
          setErr(response.status + ':' + response.statusText)
          return [];
        } else {
          setErr('');
          return response.json()
        }
        
      }))
      .then((data) => {
        console.log('data', data);
        handlerSearch()})
      .catch((err)=>{console.log(err)});
  }
  const handlerRemoveUser =(id) => {
    const temp = users.filter(user=>{
      return user.id !== id;
    });
    setUsers(temp);

  }
  const handlerUpdUser = (id) =>{
    const temp = users.map(user => {
      if(user.id == id){
        return { ... user, username: user.username + '님'}
      } else {
        return user;
      }
    })
    setUsers(temp);
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
      <ul>
        {users.map( user =>{
          return (<li key={user.id}>{user.username} 
            <button type="button" style={{float:'right'}} className="button-li" 
              onClick={()=>{handlerRemoveUser(user.id)}}>삭제</button>
            <button type="button" style={{float:'right'}} className="button-li" 
              onClick={()=>{handlerUpdUser(user.id)}}>변경</button>
            </li>)
        })}
      </ul>
      <div style={{color:'red'}}>{err}</div>
      <button className="button" onClick={handlerAddUser}>추가</button>
    </div>
  );
}

export default App;
