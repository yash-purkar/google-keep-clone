import './App.css';
import CreateNote from './CreateNote';
import Header from './Header';

function App() {
  return (
    <div className='bg-yellow-50 min-h-screen'>
      <Header />
      <CreateNote />
    </div>
  );
}

export default App;
