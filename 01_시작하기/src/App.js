import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="example" action="action_page.php">
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit"><i className="fa fa-search"></i></button>
      </form>
    </div>
  );
}

export default App;
