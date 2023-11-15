/* eslint-disable react/prop-types */
// import { PropTypes } from 'prop-types';

function Card({ image, selected, onClick }) {
	return (
		<div className='card' onClick={onClick}>
			<div className={selected && 'selected'}>
				<img src={image} alt='' className='card-face' />

				<img src='/src/assets/back.svg' alt='' className='card-back' />
			</div>
		</div>
	);
}

export default Card;
