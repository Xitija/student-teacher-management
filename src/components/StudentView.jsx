import React, { useEffect } from 'react';
import StudentList from '../features/students/StudentList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../features/students/studentsSlice';

const StudentView = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => {
    return state.students.students;
  });
  const status = useSelector((state) => state.students.status);
  const error = useSelector((state) => state.students.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Student View</h1>
      {status === 'loading' && <p>Loading...</p>}
      {error && (<p>Error: {error}</p>)}

      <StudentList students={students} />

      <h3>
        <Link to={`/students/add`}>Add Student</Link>
      </h3>

      {error && (
        <div>
          <h2>Server Not Active 😨</h2>
          <h3>
            <a
              href="https://drive.google.com/file/d/19xueS21oFeXLMYqLNy4OxKdQHVnAdKCA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Click here to view video
            </a>
          </h3>
        </div>
      )}
    </div>
  );
};

export default StudentView;
