export default function FormatDate({
  inputDate,
  format = "number",
  dateOnly = false,
}: {
  inputDate: Date | string | null | undefined;
  format?: "text" | "number";
  dateOnly?: boolean;
}): string {
  if (!inputDate) {
    return "Invalid Date";
  }

  // Parse the date to ensure consistent timezone handling
  const date = new Date(inputDate);
  if (isNaN(date.getTime())) {
    return "Invalid Date";
  }

  // Adjust the date by adding the time zone offset to align with the correct date
  const timezoneOffset = date.getTimezoneOffset() * 60000; // Get timezone offset in milliseconds
  const adjustedDate = new Date(date.getTime() + timezoneOffset); // Adjust the date

  // Decide the format based on the format argument
  if (format === "number") {
    // Format the date as mm/dd/yy
    const month = adjustedDate.getMonth() + 1; // getMonth() is zero-based
    const day = adjustedDate.getDate();
    const year = adjustedDate.getFullYear().toString().slice(-2); // Get last two digits of year

    const datePart = `${month}/${day}/${year}`;

    if (dateOnly) {
      return datePart;
    }

    // Add time part if dateOnly is false
    const hours = adjustedDate.getHours();
    const minutes = adjustedDate.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHour = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${datePart} ${formattedHour}:${formattedMinutes} ${ampm}`;
  } else {
    // Return the date in text format
    const datePart = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }).format(adjustedDate);

    if (dateOnly) {
      return datePart;
    }

    const timePart = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    }).format(adjustedDate);

    return `${datePart} ${timePart}`;
  }
}
