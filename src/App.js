import { BrowserRouter } from 'react-router-dom'
import './App.css';
import StudentView from './components/StudentView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <StudentView />
      </BrowserRouter>
    </div>
  );
}

export default App;
