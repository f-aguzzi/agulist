import React, { useState } from 'react';
import EntryPage from './pages/EntryPage';
import { Pages } from './definitions/types'

export default function App() {

	const [currentPage, setCurrentPage] = useState(Pages.entryPage);

	if (currentPage === Pages.entryPage) {
		return (
		<EntryPage />
		)
  	} 
}

