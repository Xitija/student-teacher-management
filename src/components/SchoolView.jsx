import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  setTopStudent,
  updateSchoolStats
} from '../features/school/schoolSlice';
import { fetchStudents } from '../features/students/studentsSlice';
import pic31 from '../images/pic31.png';
import pic32 from '../images/pic32.png';

const SchoolView = () => {
  const schoolStats = useSelector((state) => state.school);
  const students = useSelector((state) => state.students.students);
  const status = useSelector((state) => state.students.status);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
    const totalStudents = students.length;
    const totalAttendance = students.reduce(
      (sum, student) => sum + student.attendance,
      0
    );

    const averageAttendance = totalAttendance / totalStudents;
    const totalMarks = students.reduce(
      (sum, student) => sum + student.marks,
      0
    );

    const averageMarks = totalMarks / totalStudents;

    const topStudent = students.reduce((prev, current) => {
      return current.marks > prev.marks ? current : prev;
    }, students[0]);

    dispatch(
      updateSchoolStats({
        totalStudents,
        averageAttendance,
        averageMarks,
        topStudent
      })
    );

    dispatch(setTopStudent(topStudent));
  }, [students, dispatch, status]);

  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-full md:w-1/3">
        <img className="w-full" src={pic31} alt="School" />
      </div>
      <div className="w-full md:w-1/3 p-6 flex flex-col justify-center items-center space-y-6 bg-white border-t md:border-t-0 md:border-x border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-center relative">
          <span className="text-[#e14141] underline">School Statistics</span>
        </h1>

        <div className="w-full space-y-3 text-gray-700">
          <div className="flex justify-between items-center">
            <p className="text-lg">Total Students:</p>
            <p className="text-xl font-semibold">{schoolStats.totalStudents}</p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg">Avg. Attendance:</p>
            <p className="text-xl font-semibold">
              {schoolStats.averageAttendance.toFixed(2)}%
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-lg">Avg. Marks:</p>
            <p className="text-xl font-semibold">
              {schoolStats.averageMarks.toFixed(2)}
            </p>
          </div>
        </div>

        <div className="w-full pt-3 border-t border-gray-200">
          <div className="flex items-center justify-center space-x-2">
            <p className="text-lg">Top Student:</p>
            <p className="text-xl font-bold text-red-600">
              {schoolStats.topStudent ? schoolStats.topStudent.name : '-'}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/3 self-end">
        <img className="w-full" src={pic32} alt="School" />
      </div>
    </div>
  );
};

export default SchoolView;
