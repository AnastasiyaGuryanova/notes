import { useState } from 'react';
import { useNotes } from './useNotes';

export const useFilteredNotes = () => {
	const { notes } = useNotes();
	const [searchQuery, setSearchQuery] = useState('');

	const filteredNotes = notes.filter((note) =>
		note.title.toLowerCase().includes(searchQuery.toLowerCase())
	);

	return { filteredNotes, searchQuery, setSearchQuery };
};
