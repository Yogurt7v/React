import logo from './logo.svg';
import './App.css';
import { createContext } from 'react';

export const App = () => {
	const newDiv = document.createElement('div');
	newDiv.className = 'App';

	const newHeader = document.createElement('header');
	newHeader.className = 'App-header';

	const newImg = document.createElement('img');
	newImg.src = logo;
	newImg.className = 'App-logo';
	newImg.alt = 'logo';

	const newP = document.createElement('p');
	newP.innerHTML = 'Lets code! <code>src/App.js</code> and save to reload.';

	const newLink = document.createElement('a');
	newLink.className = 'App-link';
	newLink.href = 'https://reactjs.org';
	newLink.target = '_blank';
	newLink.rel = 'noopener noreferrer';
	newLink.innerHTML = 'Learn React';

	const newDate2 = new Date().getFullYear();
	const secondP = document.createElement('p');
	secondP.innerHTML = `${newDate2}`;

	newDiv.append(newHeader);
	newHeader.append(newImg, newP, newLink, secondP);
	return document.body.append(newDiv);
};
