
import axios from 'axios';
import UsersSearch from './UsersSearch';
import UsersList from './UsersList';
const Users = ()=>{
  const userNameInit = '임꺽정';
  const handlerAddUser=()=>{

  }
  return (
    <div>
      <UsersSearch userNameInit={userNameInit}></UsersSearch>
      <div style={{height:'10px'}}></div>
      <UsersList></UsersList>
      <button className="button" onClick={handlerAddUser}>추가</button>
    </div>
  );
}
export default Users;