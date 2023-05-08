import { useNavigate } from 'react-router-dom';

export default function Student() {
	const navigate = useNavigate();
	const handleAcademicStressClick = () => navigate(`academic-stress`);
	const handleFamilyStressClick = () => navigate(`family-stress`);

	return (
		<div>
			STUDENT ROUTE
			<button onClick={handleAcademicStressClick}>Academic Stress</button>
			<button onClick={handleFamilyStressClick}>Family Stress</button>
		</div>
	);
}
