import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentView from './components/StudentView';
import ClassView from './components/ClassView';
import SchoolView from './components/SchoolView';
import StudentDetail from './features/students/StudentDetail';
import StudentForm from './features/students/StudentForm';
import TeacherView from './components/TeacherView';
import TeacherForm from './features/teachers/TeacherForm';
import TeacherDetail from './features/teachers/TeacherDetail';
import HomeView from './components/HomeView';
import NavBar from './components/NavBar';
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Toaster position="bottom-left"/>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/school" element={<SchoolView />} />
          <Route path="/classes" element={<ClassView />} />
          <Route path="/students" element={<StudentView />} />
          <Route path="/students/:id" element={<StudentDetail />} />
          <Route path="/students/add" element={<StudentForm />} />
          <Route path="/students/edit/:id" element={<StudentForm />} />
          <Route path="/teachers" element={<TeacherView />} />
          <Route path="/teachers/:id" element={<TeacherDetail />} />
          <Route path="/teachers/add" element={<TeacherForm />} />
          <Route path="/teachers/edit/:id" element={<TeacherForm />} />
        </Routes>
      </Router>
    </div>
  );
}
