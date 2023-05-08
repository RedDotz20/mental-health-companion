import { useNavigate } from 'react-router';

export default function Home() {
	const navigate = useNavigate();
	return (
		<>
			<h1>Welcome To </h1>
			<h2>Mental Health Companion</h2>
			<button onClick={() => navigate('/occupation')}>START</button>
		</>
	);
}
