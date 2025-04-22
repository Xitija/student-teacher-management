# Student-Teacher Management System

A comprehensive web application for managing students, teachers, and school-related data built with **React**, **Redux Toolkit**, and **TailwindCSS**.

## Features

- **Student Management** - Add, edit, delete, and view student details
- **Teacher Management** - Add, edit, delete, and view teacher details
- **Class View** - Filter and sort students by class, gender, marks, and attendance
- **School Statistics** - View total students, average attendance, average marks, and top-performing student
- **Responsive Design** - Optimized for both desktop and mobile devices
- **Toast Notifications** - Provides feedback for server interactions

## Tech Stack

- **Frontend**: React, React Router, TailwindCSS
- **State Management**: Redux Toolkit
- **Backend API**: Axios for API calls to the server
- **Testing**: React Testing Library, Jest
- **Icons**: React Icons

## Project Structure

```
src/
├── components/   # Reusable UI components
├── features/     # Redux slices and feature-specific components
├── images/       # Static images used in the app
├── App.js        # Main application component
├── index.js      # Entry point of the app
├── store.js      # Redux store configuration
└── index.css     # Global styles
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/Xitija/student-teacher-management.git
   cd student-teacher-management
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm run start
   ```

The app will be available at http://localhost:3000.

## Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner in interactive watch mode |
| `npm run eject` | Ejects the app configuration (use with caution) |

## API Endpoints

The app interacts with a backend server hosted at `https://schoolmanagementapis.onrender.com`. Key endpoints:

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/students` | GET | Fetch all students |
| `/students` | POST | Add a new student |
| `/students/:id` | PUT | Update a student's details |
| `/students/:id` | DELETE | Delete a student |
| `/teachers` | GET | Fetch all teachers |
| `/teachers` | POST | Add a new teacher |
| `/teachers/:id` | PUT | Update a teacher's details |
| `/teachers/:id` | DELETE | Delete a teacher |
| `/health` | GET | Check server health |

## Deployment

To build the app for production:

```sh
npm run build
```

The production-ready files will be available in the `build/` directory.

## Screenshots

### Home View
<!-- ![Home View](path/to/home-view-screenshot.png) -->

### Student Management
<!-- ![Student Management](path/to/student-management-screenshot.png) -->

### Teacher Management
<!-- ![Teacher Management](path/to/teacher-management-screenshot.png) -->

### School Statistics
<!-- ![School Statistics](path/to/school-statistics-screenshot.png) -->

## Acknowledgments

- [React](https://reactjs.org/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TailwindCSS](https://tailwindcss.com/)
- Freepik for images
- Postman API Documentation

---

Made with ♥ by [Xitija](https://github.com/Xitija)