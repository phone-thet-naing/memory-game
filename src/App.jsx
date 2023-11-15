import './App.css';
import { useEffect, useState } from 'react';
import shuffle from '../utilities/shuffle';
import Card from './components/Card';

function App() {
	const [cards, setCards] = useState(shuffle); // Cards array from assets
	const [pickOne, setPickOne] = useState(null); // First selection
	const [pickTwo, setPickTwo] = useState(null); // Second selection
	const [disabled, setDisabled] = useState(false); // Delay handler
	const [wins, setWins] = useState(0); // Win streaks

	// Handle card selection
	function handleClick(card) {
		console.log(card);

		if (!disabled) {

			pickOne ? setPickTwo(card) : setPickOne(card);

		}
	}

	function handleTurn() {
		console.log(pickOne, pickTwo);

		setPickOne(null);
		setPickTwo(null);
		setDisabled(false);
	}

	useEffect(() => {
		let pickTimer;

		// Two cards have been clicked
		if (pickOne && pickTwo) {
			// Check if the cards are the same
			if (pickOne.image === pickTwo.image) {
				setCards(
					cards.map((card) =>
						card.image === pickOne.image ? { ...card, matched: true } : card
					)
				);
				handleTurn();
			} else {
				// Prevents new selections until after delay
				setDisabled(true);

				// Add delay between selections
				pickTimer = setTimeout(() => {
					handleTurn();
				}, 1000);
			}
		}

		return () => {
			clearTimeout(pickTimer);
		};
	}, [cards, pickOne, pickTwo]);

	useEffect(() => {
		const checkWins = cards.filter((card) => !card.matched);

		if (cards.length && checkWins.length < 1) {
			setWins(wins + 1);
			handleTurn();
			setCards(shuffle);
		}
	}, [cards, wins]);

	// useEffect(() => {
	// 	// const sortedCards = cards.map((card) => {
	// 	// 	const modifedCard = { ...card, hasDisplayed: false };

	// 	// 	return modifedCard;
	// 	// });

	// 	const sortedCards = [...cards];

	// 	const cardsLength = cards.length;

	// 	sortedCards.sort((a, b) => {
	// 		const imageA = a.image.toLowerCase();
	// 		const imageB = b.image.toLowerCase();

	// 		return imageA < imageB ? -1 : imageA > imageB ? 1 : 0;
	// 	});

	// 	// console.log('cards => ', cards);
	// 	// console.log(cards);

	// 	// function displayCardsWithDelay(index) {
	// 	// 	if (index < cardsLength) {
	// 	// 		console.log(sortedCards[index]);
	// 	// 		handleClick(cards[index]);
	// 	// 		// handleClick(cards[index + 1]);
	// 	// 		// Call the next iteration with a delay of 1000ms (1 second)
	// 	// 		setTimeout(() => {
	// 	// 			displayCardsWithDelay(index + 1);
	// 	// 		}, 1000);
	// 	// 	}
	// 	// }

	// 	function displayCardsWithDelay (i) {
	// 		setTimeout(() => {
	// 			handleClick(cards[i])
	// 		}, 1000)
	// 	}

	// 	for (let i = 0; i < cardsLength; i += 2) {
	// 		let j = i;
	// 		// console.log(j, j + 1);

	// 		// handleClick(sortedCards[i]);
	// 		displayCardsWithDelay(i)
	// 		displayCardsWithDelay(j)
	// 		// handleClick(sortedCards[j]);

	// 		// displayCardsWithDelay(i);

	// 		// displayCardsWithDelay(j)
	// 	}

	// 	// displayCardsWithDelay(0)

	// 	// setTimeout(() => {
	// 	// 	displayCardsWithDelay(0);
	// 	// }, 1000);
	// }, []);

	return (
		<>
			<div className='grid'>
				{cards.map((card) => {
					const { id, image, matched } = card;

					return (
						<Card
							key={id}
							image={image}
							selected={card === pickOne || card === pickTwo || matched}
							onClick={() => handleClick(card)}
						/>
					);
				})}
			</div>
		</>
	);
}

export default App;
