export const getExperiencedTime = (dateString: string) => {
  const givenDate = new Date(dateString);
  const currentDate = new Date();
  const diffInMilliseconds = currentDate.getTime() - givenDate.getTime();

  // Calculate the time difference in different units
  const seconds = Math.floor(diffInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  return {
    days: days,
    hours: hours % 24,
    minutes: minutes % 60,
    seconds: seconds % 60,
  };
};
