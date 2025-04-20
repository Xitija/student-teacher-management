import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addStudentAsync, updateStudentAsync, deleteStudentAsync } from './studentsSlice';
import pic21 from '../../images/pic21.jpg';

const StudentForm = () => {
  let { state } = useLocation();

  const student = state ? state : null;

  const [name, setName] = useState(student ? student.name : '');
  const [age, setAge] = useState(student ? student.age : '');
  const [grade, setGrade] = useState(student ? student.grade : '');
  const [marks, setMarks] = useState(student ? student.marks : '');
  const [gender, setGender] = useState(student ? student.gender : '');
  const [attendance, setAttendance] = useState(
    student ? student.attendance : ''
  );

  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newStudent = {
      name,
      age,
      grade,
      marks,
      gender,
      attendance
    };

    if (student) {
      dispatch(
        updateStudentAsync({ id: student._id, updatedStudent: newStudent })
      );
    } else {
      dispatch(addStudentAsync(newStudent));
    }

    setName('');
    setAge('');
    setGrade('');
    setMarks('');
    setGender('');
    setAttendance('');
  };

  // Define handleDelete function
  const handleDelete = (id) => {
    dispatch(deleteStudentAsync(id));
  };

  return (
    <div className="flex flex-col md:flex-row w-full h-full">
      {/* Form Section - First on mobile */}
      <div className="w-full md:w-1/2 flex items-center justify-center order-1 md:order-1 py-4 md:py-0">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-md w-full max-w-lg flex flex-col space-y-4">
          <h2 className="text-[#e14141] text-2xl md:text-3xl font-bold text-center underline">
            {student ? 'Edit Student' : 'Add Student'}
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

          {/* Age Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Age</label>
            <input
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Grade Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Grade</label>
            <input
              type="text"
              placeholder="Grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="border border-gray-300 rounded p-2 w-2/3"
            />
          </div>

          {/* Gender Field */}
          <div className="flex items-center space-x-4">
            <label className="w-1/3 font-medium">Gender</label>
            <div className="flex space-x-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === 'Male'}
                  onChange={() => setGender('Male')}
                  className="mr-1"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === 'Female'}
                  onChange={() => setGender('Female')}
                  className="mr-1"
                />
                Female
              </label>
            </div>
          </div>

          {/* Attendance and Marks Fields (Only for Edit) */}
          {student && (
            <>
              <div className="flex items-center space-x-4">
                <label className="w-1/3 font-medium">Attendance</label>
                <input
                  type="text"
                  placeholder="Attendance"
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-2/3"
                />
              </div>
              <div className="flex items-center space-x-4">
                <label className="w-1/3 font-medium">Marks</label>
                <input
                  type="text"
                  placeholder="Marks"
                  value={marks}
                  onChange={(e) => setMarks(e.target.value)}
                  className="border border-gray-300 rounded p-2 w-2/3"
                />
              </div>
            </>
          )}

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            className="bg-[#0e878a] hover:bg-[#9cc6be] text-white font-medium py-2 px-4 rounded"
          >
            {student ? 'Update' : 'Add'}
          </button>
          {student && (
            <button
              onClick={() => handleDelete(student._id)}
              className="bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded"
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
            src={pic21}
            alt="students"
          />
        </div>
      </div>
    </div>
  );
};

export default StudentForm;
