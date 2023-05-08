import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router-dom';
import { familyStress } from '../../data/questions';

export default function FamilyStress() {
	const [showResponse, setShowResponse] = useState(false);
	const { id = '1' } = useParams();
	const navigate = useNavigate();

	const handleYes = () => setShowResponse(true);

	const handleNo = () => {
		navigate(`/student/family-stress/${parseInt(id) + 1}`);
		setShowResponse(false);
	};

	const handleNext = () => {
		if (familyStress.length === parseInt(id)) {
			navigate(`/endmessage`);
		} else {
			navigate(`/student/family-stress/${parseInt(id) + 1}`);
			setShowResponse(false);
		}
	};

	return (
		<div>
			<h1>ACADEMIC STRESS</h1>
			<p>{familyStress[parseInt(id) - 1].text}</p>

			{showResponse && <p>{familyStress[parseInt(id) - 1].yesResponse}</p>}

			{showResponse ||
				(familyStress.length === parseInt(id) && (
					<button onClick={() => handleNext()}>
						{!(familyStress.length === parseInt(id)) ? 'NEXT' : 'END'}
					</button>
				))}

			{!showResponse && parseInt(id) < familyStress.length && (
				<>
					<button onClick={() => handleYes()}>YES</button>
					<button onClick={() => handleNo()}>NO</button>
				</>
			)}
		</div>
	);
}
