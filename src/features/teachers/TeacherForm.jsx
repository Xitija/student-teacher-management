import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { addTeacherAsync, updateTeacherAsync } from './teachersSlice';

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
        phoneNumber
      }
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

  return (
    <div>
      <h2>{teacher ? 'Edit Teacher' : 'Add Teacher'}</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        placeholder="Phone number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>{teacher ? 'Update' : 'Add'}</button>
    </div>
  );
};

export default TeacherForm;
