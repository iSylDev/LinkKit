
export const formatDateShort = (dateString: string | Date): string => {
  if (!dateString) return "";
  
  const date = new Date(dateString);

  // Check if date is valid to avoid "Invalid Date" strings
  if (isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
  }).format(date);
};