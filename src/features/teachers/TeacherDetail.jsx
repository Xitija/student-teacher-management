import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { deleteTeacherAsync } from './teachersSlice';

const TeacherDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const teacher = useSelector((state) =>
    state.teachers.teachers.find((t) => t._id === id)
  );

  if (!teacher) {
    return <div>Teacher not found</div>;
  }

  const handleDelete = (id) => {
    dispatch(deleteTeacherAsync(id));
  };

  return (
    <div>
      <h2>Teacher Detail</h2>
      <p>Name: {teacher.name}</p>
      <p>Subject: {teacher.subject} </p>
      <p>Contact Information</p>
      <p>Email: {teacher.contactInformation.email}</p>
      <p>Phone Number: {teacher.contactInformation.phoneNumber}</p>
      <Link to={`/teachers/edit/${teacher._id}`} state={teacher}>
        Edit Details
      </Link>
      <button onClick={() => handleDelete(teacher._id)}>Delete</button>
    </div>
  );
};

export default TeacherDetail;
