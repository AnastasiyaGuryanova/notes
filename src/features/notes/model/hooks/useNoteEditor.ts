import { useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Markdown } from 'tiptap-markdown';
import { debounce } from 'lodash';
import { Note } from 'Entities/Note';
import TextStyle from '@tiptap/extension-text-style';

export const useNoteEditor = (
	note: Note | null,
	updateNote: (noteId: number, title: string, content: string) => Promise<void>
) => {
	const editor = useEditor({
		extensions: [
			StarterKit.configure({
				bulletList: {
					keepMarks: true,
					keepAttributes: false,
				},
				orderedList: {
					keepMarks: true,
					keepAttributes: false,
				},
			}),
			Markdown.configure({
				html: true,
				tightLists: true,
				bulletListMarker: '-',
				breaks: true,
			}),

			TextStyle,
		],
		content: note?.content || '# Start typing...',
		onUpdate: debounce(({ editor }) => {
			if (note && note.id) {
				const content = editor.storage.markdown.getMarkdown();
				updateNote(note.id, note.title, content);
			}
		}, 500),
	});

	return editor;
};
