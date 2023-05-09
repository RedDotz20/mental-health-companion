import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Occupation from './pages/Occupation';

import WorkingStudent from './pages/WorkingStudent';

import EndMessage from './pages/EndMessage';
import Student from './pages/Student';
import AcademicStress from './pages/Student/AcademicStress';
import FamilyStress from './pages/Student/FamilyStress';
import StudentStatus from './pages/Student/StudentStatus';

export default function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/occupation"
				element={<Occupation />}
			/>
			<Route
				path="/student"
				element={<Student />}
			/>
			<Route
				path="/student/academic-stress/:id"
				element={<AcademicStress />}
			/>
			<Route
				path="/student/family-stress/:id"
				element={<FamilyStress />}
			/>
			<Route
				path="working-student/:id"
				element={<WorkingStudent />}
			/>
			<Route
				path="endmessage"
				element={<EndMessage />}
			/>
			<Route
				path="student-status"
				element={<StudentStatus />}
			/>
		</Routes>
	);
}
