import React from 'react';
import About from './About';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import { capitalize } from '../utils';
import './style.css';

const Page = ({ currentPage }) => {
	const renderPage = (page) => {
		switch (page) {
			case 'portfolio':
				return <Portfolio />;
			case 'contact':
				return <Contact />;
			case 'resume':
				return <Resume />;
			default:
				return <About />;
		}
	};
	return (
		<section className="container py-4">
			<h2 className="mb-3">{capitalize(currentPage)}</h2>
			{renderPage(currentPage)}
		</section>
	);
};

export default Page;
