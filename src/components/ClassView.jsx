import { useSelector, useDispatch } from 'react-redux';
import { setFilter, setSortBy } from '../features/students/studentsSlice';

const ClassView = () => {
  const students = useSelector((state) => state.students.students);
  const filter = useSelector((state) => state.students.filter);
  const sortBy = useSelector((state) => state.students.sortBy);
  const dispatch = useDispatch();

  const filterStudents = students.filter((student) => {
    if (filter === 'All') return true;
    return student.gender === filter;
  });

  const sortedStudents = [...filterStudents].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'marks') return b.marks - a.marks;
    if (sortBy === 'attendance') return b.attendance - a.attendance;
    return 0;
  });

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  return (
    <div>
      <h1>Class View</h1>
      <div>
        <label htmlFor="filter">Filter By Gender:</label>
        <select id="filter" onChange={handleFilterChange} value={filter}>
          <option value="All">All</option>
          <option value="Male">Boys</option>
          <option value="Female">Girls</option>
        </select>
      </div>
      <div>
        <label htmlFor='sortBy'>Sort By:</label>
        <select id='sortBy' onChange={handleSortChange} value={sortBy}>
          <option value='name'>Name</option>
          <option value='marks'>Marks</option>
          <option value='attendance'>Attendance</option>
        </select>
      </div>
      <div>
        <ul>
            {sortedStudents.map((student) => (
                <li key={student._id}>
                    {student.name} - {student.gender} - Marks : {student.marks} -
                    Attendance : {student.attendance}
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ClassView;
