import { useSelector, useDispatch } from 'react-redux';
import {
  setFilter,
  setSortBy,
  setClass
} from '../features/students/studentsSlice';
import { useEffect } from 'react';
import { fetchStudents } from '../features/students/studentsSlice';
import pic33 from '../images/pic33.png';
import pic34 from '../images/pic34.png';

const ClassView = () => {
  const students = useSelector((state) => state.students.students);
  const selectedClass = useSelector((state) => state.students.selectedClass);
  const filter = useSelector((state) => state.students.filter);
  const sortBy = useSelector((state) => state.students.sortBy);
  const status = useSelector((state) => state.students.status);
  const dispatch = useDispatch();

  const classStudents = students.filter((student) => {
    if (selectedClass === 'All') return true;
    return student.grade === selectedClass;
  });

  const filterStudents = [...classStudents].filter((student) => {
    if (filter === 'All') return true;
    return student.gender === filter;
  });

  const sortedStudents = [...filterStudents].sort((a, b) => {
    if (sortBy === 'name') return a.name.localeCompare(b.name);
    if (sortBy === 'marks') return b.marks - a.marks;
    if (sortBy === 'attendance') return b.attendance - a.attendance;
    return 0;
  });

  const handleClassChange = (e) => {
    dispatch(setClass(e.target.value));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);
  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-full md:w-1/3">
        <img className="w-full" src={pic33} alt="School" />
      </div>
      <div className="w-full md:w-1/3 p-2 flex flex-col justify-center items-center space-y-4 bg-white">
        <h1
          style={{ color: '#e14141' }}
          className="text-4xl font-bold underline"
        >
          Class View
        </h1>
        <div className="flex flex-wrap gap-3 p-3 bg-gray-50 rounded-lg mb-4">
          <div className="flex items-center">
            <label
              htmlFor="selectClass"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Class:
            </label>
            <select
              id="selectClass"
              onChange={handleClassChange}
              value={selectedClass}
              className="px-2 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="Nursery">Nursery</option>
            </select>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="filter"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Gender:
            </label>
            <select
              id="filter"
              onChange={handleFilterChange}
              value={filter}
              className="px-2 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="All">All</option>
              <option value="Male">Boys</option>
              <option value="Female">Girls</option>
            </select>
          </div>

          <div className="flex items-center">
            <label
              htmlFor="sortBy"
              className="mr-2 text-sm font-medium text-gray-700"
            >
              Sort By:
            </label>
            <select
              id="sortBy"
              onChange={handleSortChange}
              value={sortBy}
              className="px-2 py-1 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="name">Name</option>
              <option value="marks">Marks</option>
              <option value="attendance">Attendance</option>
            </select>
          </div>
        </div>
        <div className="w-full overflow-x-auto rounded-lg shadow">
          <table className="w-full text-sm text-left text-gray-700">
            <thead className="text-xs uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-4 py-3 font-medium">
                  Name
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Gender
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Marks
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Attendance
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                  Class
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedStudents.map((student) => (
                <tr
                  key={student._id}
                  className="border-b bg-white hover:bg-gray-50"
                >
                  <th
                    scope="row"
                    className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap"
                  >
                    {student.name}
                  </th>
                  <td className="px-4 py-3">{student.gender}</td>
                  <td className="px-4 py-3">{student.marks}</td>
                  <td className="px-4 py-3">{student.attendance}</td>
                  <td className="px-4 py-3">{student.grade}</td>
                </tr>
              ))}
              {sortedStudents.length === 0 && (
                <tr className="bg-white">
                  <td
                    colSpan="5"
                    className="px-4 py-3 text-center text-gray-500"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full md:w-1/3 self-end">
        <img className="w-full" src={pic34} alt="School" />
      </div>
    </div>
  );
};

export default ClassView;
