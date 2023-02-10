import React, {useState, useRef} from 'react';
import axios from 'axios';
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
    /*
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
    */
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then( response => {
        console.log(response);
        setErr('');
        setUsers(response.data);
      })
      .catch((error => { 
        console.log(error);
        setUsers([]);
        setErr(error.message);
      }))

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
    // get
    // post
    // put
    // fetch
    // delete
    /*
    fetch('https://jsonplaceholder.typicode.com/users',{
      method:'POST',
      headers:{'Content-Type':'application/json',
      body:JSON.stringify({
        name: encodeURIComponent('세종대왕'),
        username:encodeURIComponent('세종대왕'),
        email:'sejong@test.com'
      })}
    })
    .then((response =>{
      if(!response.ok){
        //alert(response.status);
      } else {
        return response.json();
      }
    }))
    .then((data) => {
      console.log('data', data);
      handlerSearch();
    });
    */
    axios.post('https://jsonplaceholder.typicode.com/users',{
      name: '세종대왕',
      username:encodeURIComponent('세종대왕'),
      email:'sejong@test.com'
    })
    .then( response => {
      console.log(response);
      setErr('');
      handlerSearch();
    })
    .catch((error => { 
      console.log(error);
      setErr(error.message);
    }))

  }
  const handlerRemoveUser =(id) => {
    /*
    fetch('https://jsonplaceholder.typicode.com/users/1',{
      method:'DELETE',
      headers:{'Content-Type':'application/json'}
    })
    .then(response =>{
      console.log(response);
      if(!response.ok){
        alert(response.status);
      } else {
        handlerSearch();
        
      }
    })
    */
    axios.delete('https://jsonplaceholder.typicode.com/users/' + id)
    .then( response => {
      console.log(response);
      setErr('');
      handlerSearch();
    })
    .catch((error => { 
      console.log(error);
      setErr(error.message);
    }))
    
  }
  const handlerUpdUser = (id) =>{
    /*
    fetch('https://jsonplaceholder.typicode.com/users/' + id, {
        method:'PATCH', // 'PATCH'
        headers:{'Content-Type':'application/json'
      },
      body:JSON.stringify({username:'AAA'})
    })
    .then((response =>{
      if(!response.ok){
        alert(response.status)

      } else {
        handlerSearch();
        return response.json();
      }
    }))
    .then(data=>{
      console.log('data', data);
    })
    */
    axios.patch('https://jsonplaceholder.typicode.com/users/' + id,{
      name: '세종대왕',
      username:encodeURIComponent('세종대왕'),
      email:'sejong@test.com'
    })
    .then( response => {
      console.log(response);
      setErr('');
      handlerSearch();
    })
    .catch((error => { 
      console.log(error);
      setErr(error.message);
    }))

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
