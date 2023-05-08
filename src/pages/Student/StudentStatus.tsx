import { useNavigate } from 'react-router';
export default function StudentStatus() {
	const navigate = useNavigate();
	return (
		<div>
			<h1>What are you feeling right now?</h1>

			<button onClick={() => navigate('/student/academic-stress/1')}>
				Academic Stress
			</button>
			<button onClick={() => navigate('/student/family-stress/1')}>
				Family Stress
			</button>
		</div>
	);
}
