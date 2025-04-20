import React from 'react';
import { Link } from 'react-router-dom';

const TeacherList = ({ teachers }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg shadow-md max-h-64 md:max-h-96 overflow-y-auto">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Teacher List</h2>
      <ul className="space-y-3">
        {teachers.map((teacher) => (
          <li
            key={teacher._id}
            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow"
          >
            <Link
              to={`/teachers/${teacher._id}`}
              className="block text-gray-800 hover:text-blue-500 font-medium"
            >
              <p className="text-lg">{teacher.name}</p>
              <p className="text-sm text-gray-600">
                Subject: {teacher.subject}
              </p>
              <p className="text-sm text-gray-600">
                Phone: {teacher.contactInformation.phoneNumber}
              </p>
              <p className="text-sm text-gray-600">
                Email: {teacher.contactInformation.email}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
