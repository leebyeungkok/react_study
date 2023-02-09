import logo from './logo.svg';
import './App.css';

function App() {
  const placeHolder = '이름을 입력해 주세요';
  const searchIcon = 'fa fa-search';
  const myStyle = {backgroundColor:'lightyellow'};
  const handlerSearch = () =>{
    alert('search');
  }
  return (
    <div className="App">
      <form className="example" action="action_page.php">
        <input style={myStyle} 
        type="text" placeholder={placeHolder} name="search" />
        <button type="button" onClick={ handlerSearch}><i className={searchIcon}></i></button>
      </form>
    </div>
  );
}

export default App;
