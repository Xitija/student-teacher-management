import React from 'react';
import { Link } from 'react-router-dom';

const StudentList = ({ students }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-h-64 md:max-h-96 overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Student List</h2>
      <ul className="space-y-3">
        {students.map((student) => (
          <li
            key={student._id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <Link
              to={`/students/${student._id}`}
              className="block text-gray-800 hover:text-blue-500 font-medium"
            >
              <p className="text-lg">{student.name}</p>
              <p className="text-sm text-gray-600">
                Age: {student.age}, Grade: {student.grade}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
