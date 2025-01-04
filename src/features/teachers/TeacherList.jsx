import { Link } from 'react-router-dom';

const TeacherList = ({ teachers }) => {
  return (
    <div>
      <h2>Teacher List</h2>
      <ul>
        {teachers.map((teacher) => (
          <li key={teacher._id}>
            <Link to={`/teachers/${teacher._id}`}>
              {teacher.name}
              Subject: {teacher.subject}
              Phone number: {teacher.contactInformation.phoneNumber}
              Email: {teacher.contactInformation.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherList;
