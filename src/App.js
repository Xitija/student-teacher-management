import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import './App.css';
import StudentView from './components/StudentView';
import ClassView from './components/ClassView';
import SchoolView from './components/SchoolView';
import StudentDetail from './features/students/StudentDetail';
import StudentForm from './features/students/StudentForm';

export default function App() {
  return (
    <div className='App'>
      <Router>
        <div>
          <div className='navbar'>
            <div className='logo'>Student Management System</div>
            <nav>
              <ul>
                <li>
                  <Link to='/'>Students</Link>
                </li>
                <li>
                  <Link to='/classes'>Classes</Link>
                </li>
                <li>
                  <Link to='/school'>School</Link>
                </li>
              </ul>
            </nav>
          </div>

          <Routes>
            <Route path='/school' element={<SchoolView />} />
            <Route path='/classes' element={<ClassView />} />
            <Route path='/' element={<StudentView />} />
            <Route path='/students/:id' element={<StudentDetail />} />
            <Route path='/students/add' element={<StudentForm />} />
            <Route path='/students/edit/:id' element={<StudentForm />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
}
