import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addTeacherAsync, updateTeacherAsync, deleteTeacherAsync } from './teachersSlice';
import pic42 from '../../images/pic42.png';

const TeacherForm = () => {
  let { state } = useLocation();

  const teacher = state ? state : null;

  const [name, setName] = useState(teacher ? teacher.name : '');
  const [subject, setSubject] = useState(teacher ? teacher.subject : '');
  const [email, setEmail] = useState(
    teacher ? teacher.contactInformation.email : ''
  );
  const [phoneNumber, setPhoneNumber] = useState(
    teacher ? teacher.contactInformation.phoneNumber : ''
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTeacher = {
      name,
      subject,
      contactInformation: {
        email,
        phoneNumber,
      },
    };

    if (teacher) {
      dispatch(
        updateTeacherAsync({ id: teacher._id, updatedTeacher: newTeacher })
      );
    } else {
      dispatch(addTeacherAsync(newTeacher));
    }

    setName('');
    setSubject('');
    setPhoneNumber('');
    setEmail('');
  };

   const handleDelete = (id) => {
      dispatch(deleteTeacherAsync(id));
    };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Form Section - First on mobile */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-1 py-4 md:py-0">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg flex flex-col space-y-4">
          <h2 className="text-[#e14141] text-2xl md:text-3xl font-bold text-center underline">
            {teacher ? 'Edit Teacher' : 'Add Teacher'}
          </h2>

          {/* Name Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Name</label>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Subject Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Subject</label>
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Email</label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Phone Number Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Phone</label>
            <input
              type="text"
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#0e878a] hover:bg-[#9cc6be] text-white font-medium py-2 px-4 rounded"
          >
            {teacher ? 'Update' : 'Add'}
          </button>
          {teacher && (
            <button
              onClick={() => handleDelete(teacher._id)}
              className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
            >
              Delete
            </button>
          )}
        </div>
      </div>

      {/* Image Section - Second on mobile */}
      <div className="w-full md:w-1/2 flex-grow md:h-full order-2 md:order-2">
        <div className="w-full h-full overflow-hidden">
          <img
            className="w-full h-full object-contain md:object-cover"
            src={pic42}
            alt="teachers"
          />
        </div>
      </div>
    </div>
  );
};

export default TeacherForm;
