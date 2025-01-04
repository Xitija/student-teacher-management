import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TeacherList from '../features/teachers/TeacherList';
import { fetchTeachers } from '../features/teachers/teachersSlice';

const TeacherView = () => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => {
    return state.teachers.teachers;
  });

  const status = useSelector((state) => state.teachers.status);
  const error = useSelector((state) => state.teachers.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div>
      <h1>Teacher View</h1>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <TeacherList teachers={teachers} />

      <h3>
        <Link to={`/teachers/add`}>Add Teacher</Link>
      </h3>
    </div>
  );
};

export default TeacherView;
