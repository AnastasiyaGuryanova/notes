import { FC } from 'react';
import { Flex, ActionIcon } from '@mantine/core';
import {
	IconBold,
	IconItalic,
	IconStrikethrough,
	IconCode,
	IconTextCaption,
	IconH1,
	IconH2,
	IconH3,
	IconH4,
	IconList,
	IconListNumbers,
	IconBlockquote,
	IconMinus,
	IconArrowBackUp,
} from '@tabler/icons-react';
import { Editor } from '@tiptap/react';

interface MenuBarProps {
	editor: Editor | null;
	isTitleEditing: boolean;
}

export const MenuBar: FC<MenuBarProps> = ({ editor, isTitleEditing }) => {
	if (!editor) return null;

	return (
		<Flex gap="xs" wrap="wrap">
			<ActionIcon
				onClick={() => editor.chain().focus().toggleBold().run()}
				variant={editor.isActive('bold') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing || !editor.can().chain().focus().toggleBold().run()
				}
				color="myColor.9"
				title="Жирный"
			>
				<IconBold size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleItalic().run()}
				variant={editor.isActive('italic') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing || !editor.can().chain().focus().toggleItalic().run()
				}
				color="myColor.9"
				title="Курсив"
			>
				<IconItalic size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleStrike().run()}
				variant={editor.isActive('strike') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing || !editor.can().chain().focus().toggleStrike().run()
				}
				color="myColor.9"
				title="Зачеркнутый"
			>
				<IconStrikethrough size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleCodeBlock().run()}
				variant={editor.isActive('codeBlock') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleCodeBlock().run()
				}
				color="myColor.9"
				title="Блок кода"
			>
				<IconCode size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().setParagraph().run()}
				variant={editor.isActive('paragraph') ? 'filled' : 'outline'}
				disabled={isTitleEditing}
				color="myColor.9"
				title="Абзац"
			>
				<IconTextCaption size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
				variant={editor.isActive('heading', { level: 1 }) ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleHeading({ level: 1 }).run()
				}
				color="myColor.9"
				title="Заголовок 1"
			>
				<IconH1 size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
				variant={editor.isActive('heading', { level: 2 }) ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleHeading({ level: 2 }).run()
				}
				color="myColor.9"
				title="Заголовок 2"
			>
				<IconH2 size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
				variant={editor.isActive('heading', { level: 3 }) ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleHeading({ level: 3 }).run()
				}
				color="myColor.9"
				title="Заголовок 3"
			>
				<IconH3 size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
				variant={editor.isActive('heading', { level: 4 }) ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleHeading({ level: 4 }).run()
				}
				color="myColor.9"
				title="Заголовок 4"
			>
				<IconH4 size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleBulletList().run()}
				variant={editor.isActive('bulletList') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleBulletList().run()
				}
				color="myColor.9"
				title="Маркированный список"
			>
				<IconList size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleOrderedList().run()}
				variant={editor.isActive('orderedList') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleOrderedList().run()
				}
				color="myColor.9"
				title="Нумерованный список"
			>
				<IconListNumbers size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().toggleBlockquote().run()}
				variant={editor.isActive('blockquote') ? 'filled' : 'outline'}
				disabled={
					isTitleEditing ||
					!editor.can().chain().focus().toggleBlockquote().run()
				}
				color="myColor.9"
				title="Цитата"
			>
				<IconBlockquote size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().setHorizontalRule().run()}
				disabled={isTitleEditing}
				color="myColor.9"
				title="Горизонтальная линия"
			>
				<IconMinus size={18} />
			</ActionIcon>

			<ActionIcon
				onClick={() => editor.chain().focus().undo().run()}
				disabled={isTitleEditing || !editor.can().chain().focus().undo().run()}
				color="myColor.9"
				title="Отменить"
			>
				<IconArrowBackUp size={18} />
			</ActionIcon>
		</Flex>
	);
};
