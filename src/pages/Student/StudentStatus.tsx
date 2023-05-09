import { useNavigate } from 'react-router';
export default function StudentStatus() {
	const navigate = useNavigate();
	return (
		<div>
			<h2>What are you feeling right now?</h2>

			<div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
				<button onClick={() => navigate('/student/academic-stress/1')}>
					Academic Stress
				</button>
				<button onClick={() => navigate('/student/family-stress/1')}>
					Family Stress
				</button>
			</div>
		</div>
	);
}
