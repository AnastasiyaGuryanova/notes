export const formatDateTimeNoSeconds = (date: string | Date): string => {
	const dateObj = typeof date === 'string' ? new Date(date) : date;
	return dateObj.toLocaleString('ru-RU', {
		year: 'numeric',
		month: 'numeric',
		day: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
};
