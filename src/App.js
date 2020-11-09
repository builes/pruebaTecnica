import logo from './logo.svg';
import './App.css';
import Comic from './components/Comic'
import Rating from './components/Rating';

function App() {
  return (
    <div className="container bg-light">
      <div className="row justify-content-center">
        <Comic/>
        <Rating/>
      </div>
    </div>
  );
}

export default App;
