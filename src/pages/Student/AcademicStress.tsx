import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { academicStress } from '../../data/questions';

export default function AcademicStress() {
	const [showResponse, setShowResponse] = useState(false);
	const { id = '1' } = useParams();
	const navigate = useNavigate();

	const handleYes = () => setShowResponse(true);

	const handleNo = () => {
		navigate(`/student/academic-stress/${parseInt(id) + 1}`);
		setShowResponse(false);
	};

	const handleNext = () => {
		if (academicStress.length === parseInt(id)) {
			navigate(`/endmessage`);
		} else {
			navigate(`/student/academic-stress/${parseInt(id) + 1}`);
			setShowResponse(false);
		}
	};

	return (
		<>
			<h2>{academicStress[parseInt(id) - 1].text}</h2>

			{showResponse && <p>{academicStress[parseInt(id) - 1].yesResponse}</p>}

			{showResponse && (
				<button onClick={() => handleNext()}>
					{!(academicStress.length === parseInt(id)) ? 'NEXT' : 'END'}
				</button>
			)}

			{academicStress.length === parseInt(id) && (
				<button onClick={() => handleNext()}>END</button>
			)}

			{!showResponse && parseInt(id) < academicStress.length && (
				<div
					style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
				>
					<button onClick={() => handleYes()}>YES</button>
					<button onClick={() => handleNo()}>NO</button>
				</div>
			)}
		</>
	);
}
