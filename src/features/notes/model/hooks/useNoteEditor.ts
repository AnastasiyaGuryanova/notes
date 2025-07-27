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
					keepAttributes: true,
				},
				orderedList: {
					keepMarks: true,
					keepAttributes: true,
				},
				codeBlock: {
					HTMLAttributes: { class: 'language-markdown' },
				},
				heading: {
					levels: [1, 2, 3, 4, 5, 6],
				},
			}),
			Markdown.configure({
				html: true,
				tightLists: true,
				bulletListMarker: '-',
				breaks: true,
				transformPastedText: true,
			}),
			TextStyle,
		],
		content: note?.content || 'Начните печатать...',
		onUpdate: debounce(({ editor }) => {
			if (note && note.id) {
				const content = editor.storage.markdown.getMarkdown();
				updateNote(note.id, note.title, content);
			}
		}, 500),
		editorProps: {
			handleKeyDown: (view, event) => {
				if (
					event.key === 'Enter' &&
					view.state.selection.$head.parent.type.name === 'codeBlock'
				) {
					event.preventDefault();
					view.dispatch(view.state.tr.insertText('\n'));
					return true;
				}
				return false;
			},
		},
	});

	return editor;
};
