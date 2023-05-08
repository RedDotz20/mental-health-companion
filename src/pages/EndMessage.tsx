import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function EndMessage() {
	const [showButton, serShowButton] = useState(false);
	const navigate = useNavigate();
	setTimeout(() => serShowButton(true), 5000);
	setTimeout(() => navigate('/'), 8000);

	return (
		<div>
			<h2>
				I hope I made you feel better, that's all I can help for now. See you
				again next time! 😊
			</h2>
			{showButton && (
				<button onClick={() => navigate('/')}>GO BACK TO HOME</button>
			)}
		</div>
	);
}
