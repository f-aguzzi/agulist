import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import EntryPage from './pages/EntryPage';

export default function App() {

	const [currentPage, setCurrentPage] = useState(Pages.entryPage);

	if (currentPage === Pages.entryPage) {
		return (
		<EntryPage />
		)
  	} 
}

