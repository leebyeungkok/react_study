import React, {useState, useRef} from 'react';
const UsersList =()=>{
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

  const handlerAddUser = () =>{
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
  return(
    <div>
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
    </div>
  )

}
export default UsersList;