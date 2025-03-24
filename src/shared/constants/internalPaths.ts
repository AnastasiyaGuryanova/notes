enum PathKeys {
	Login = 'login',
	Notes = 'notes',
	NotesCard = 'notesCard',
	NotFound = 'notFound',
}

type InternalPathsType = {
	[key in PathKeys]: string;
};

export const internalPaths: InternalPathsType = {
	[PathKeys.Login]: '/',
	[PathKeys.Notes]: '/notes',
	[PathKeys.NotesCard]: '/notes/:id',
	[PathKeys.NotFound]: '*',
};
