enum PathKeys {
	Login = 'login',
	Notes = 'notes',
	NotFound = 'notFound',
}

type InternalPathsType = {
	[key in PathKeys]: string;
};

export const internalPaths: InternalPathsType = {
	[PathKeys.Login]: '/',
	[PathKeys.Notes]: '/notes',
	[PathKeys.NotFound]: '*',
};
