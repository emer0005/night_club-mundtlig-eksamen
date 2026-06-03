// Date converter lavet med AI

export function eventDate(dateString) {
  const date = new Date(dateString);

  const options = {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  const formatted = date.toLocaleString("en-US", options);

  return formatted.replace(",", " ·");
}

export function reviewDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return date.toLocaleDateString("da-DK", options);
}

export function dayDate(dateString) {
  const date = new Date(dateString);

  const options = {
    day: "numeric",
    month: "long",
  };

  return date.toLocaleDateString("en-us", options);
}

export function timeDate(dateString) {
  const date = new Date(dateString);

  const options = {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return date.toLocaleTimeString("en-US", options);
}
