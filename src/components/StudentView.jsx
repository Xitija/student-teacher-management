import React, { useEffect } from 'react';
import StudentList from '../features/students/StudentList';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../features/students/studentsSlice';
import pic11 from '../images/pic11.jpg';

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
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Content Section - First on mobile */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-2 py-4 md:py-0">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg flex flex-col space-y-4">
          <h1 className="text-[#e14141] text-2xl md:text-3xl font-bold text-center underline">
            Student View
          </h1>

          {/* Loading and Error Messages */}
          {status === 'loading' && (
            <p className="text-center text-blue-500">Loading...</p>
          )}
          {error && <p className="text-center text-red-500">Error: {error}</p>}

          {/* Student List */}
          <div className="max-h-64 md:max-h-96 overflow-y-auto">
            <StudentList students={students} />
          </div>

          {/* Add Student Link */}
          <button className="text-center bg-[#0e878a] hover:bg-[#9cc6be] text-white font-medium py-2 px-4 rounded">
            <Link to={`/students/add`} className="block">
              Add Student
            </Link>
          </button>

          {/* Error Message with Video Link */}
          {error && (
            <div className="text-center">
              <h2 className="text-lg font-semibold text-red-600">
                Server Not Active 😨
              </h2>
              <h3>
                <a
                  href="https://drive.google.com/file/d/19xueS21oFeXLMYqLNy4OxKdQHVnAdKCA/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Click here to view video
                </a>
              </h3>
            </div>
          )}
        </div>
      </div>

      {/* Image Section - Second on mobile */}
      <div className="w-full md:w-1/2 flex-grow md:h-full order-2 md:order-1">
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-contain md:object-cover"
            src={pic11}
            alt="kids"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentView;
