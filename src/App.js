
import './App.css';
import ToDoList from './ToDoList';
function App() {
  return (
    <div className="App">
      <div className='header'>
        <img className='h1Logo' src={require('./images/bell.png')} />
        <h1>reminders</h1>
      </div>
      <ToDoList />
    </div>
  );
}

export default App;
