export const getFilmRating = (rating: number): string => {
  if (rating < 3) {
    return 'Bad';
  } else if (rating >= 3 && rating < 5 ){
    return 'Normal';
  } else if (rating >= 5 && rating < 8 ){
    return 'Good';
  } else if (rating >= 8 && rating < 10 ){
    return 'Very good';
  } else {
    return 'Awesome';
  }
};

export function getRuntime(timeMinutes: number): string {
  const hours = parseInt(String((timeMinutes) / 60), 10);
  const minutes = timeMinutes - hours * 60;

  const difHours = `${hours.toString()}h`;
  const difMinutes = `${minutes.toString().padStart(2,'0')}m`;

  if (hours === 0) {
    return difMinutes;
  }

  return `${difHours} ${difMinutes}`;
}

export function convertDate(date: string): string {
  const dateFormat = new Date(date);

  return (
    `${dateFormat.toLocaleString(
      'eng',
      { month: 'long' })} ${dateFormat.getDate()}, ${dateFormat.getFullYear()}`
  );
}
