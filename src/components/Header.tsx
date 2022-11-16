import React, { useState } from 'react';

interface HeaderText {
    buttonText?: string;
}

interface Movie {
	title: string;
	date: string;
	rating: string;
	description: string;
}

const Header = ({ buttonText }: HeaderText) => {
	const [count, setCount] = useState(0);
	const [movie, setMovie] = useState<Movie | null>(null);

	const increment = () => {
		setCount(count + 1);
	}

	return (
		<div>
			<h1>Header</h1>
			<button onClick={increment}>{buttonText || 'Increment Count'}</button>
			<p>{count}</p>
		</div>
	)
}

export default Header