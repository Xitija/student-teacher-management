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
  }, [students, dispatch]);

  return (
    <div className="flex flex-wrap w-full h-full">
      <div className="w-full md:w-1/3">
        <img className="w-full" src={pic31} alt="School" />
      </div>
      <div className="w-full md:w-1/3 p-2 flex flex-col justify-center items-center space-y-5 bg-white">
        <h1 style={{ color: "#e14141"}} className="text-4xl font-bold underline">School Statistics</h1>
        <div className="text-2xl ">
          <p>Total Students: <span className='font-semibold'>{schoolStats.totalStudents}</span></p>
          <p>Average Attendance: <span className='font-semibold'>{schoolStats.averageAttendance.toFixed(2)}</span></p>
          <p>Average Marks: <span className='font-semibold'>{schoolStats.averageMarks.toFixed(2)}</span></p>
        </div>
        <p className="text-2xl font-semibold">
          Top Student:{' '}
          {schoolStats.topStudent ? schoolStats.topStudent.name : '-'}
        </p>
      </div>
      <div className="w-full md:w-1/3 self-end">
        <img className="w-full" src={pic32} alt="School" />
      </div>
    </div>
  );
};

export default SchoolView;
