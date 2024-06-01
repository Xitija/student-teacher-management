import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addStudentAsync, updateStudentAsync } from './studentsSlice';

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

  return (
    <div>
      <h2>{student ? 'Edit Student' : 'Add Student'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        placeholder="Grade"
        value={grade}
        onChange={(e) => setGrade(e.target.value)}
      />
      <div>
        <label>
          Gender
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === 'Male'}
            onChange={() => setGender('Male')}
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
          />
          Female
        </label>
      </div>
      {student && (
        <>
          <label>Mark Attendance:</label>
          <select
            value={attendance}
            onChange={(e) => setAttendance(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
          <input
            type="text"
            placeholder="Marks"
            value={marks}
            onChange={(e) => setMarks(e.target.value)}
          />
        </>
      )}
      <button onClick={handleSubmit}>{student ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default StudentForm;
