import { useNavigate } from 'react-router';

export default function Occupation() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Hi👋, I'm Your mental health companion.</h1>
			<h2>How may I help you today?</h2>
			<div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
				<button onClick={() => navigate('/student-status')}>
					I am a Student
				</button>
				<button onClick={() => navigate('/working-student/1')}>
					I am a Working Student
				</button>
			</div>
		</>
	);
}
