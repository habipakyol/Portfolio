export function formatDate(date: string, includeRelative = false) {
  const currentDate = new Date();

  if (!date.includes("T")) {
    date = `${date}T00:00:00`;
  }

  const targetDate = new Date(date);
  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth();
  const daysAgo = currentDate.getDate() - targetDate.getDate();

  let formattedRelative = "";

  if (yearsAgo > 0) {
    formattedRelative = `${yearsAgo} yıl önce`;
  } else if (monthsAgo > 0) {
    formattedRelative = `${monthsAgo} ay önce`;
  } else if (daysAgo > 0) {
    formattedRelative = `${daysAgo} gün önce`;
  } else {
    formattedRelative = "Bugün";
  }

  const fullDate = targetDate.toLocaleString("tr-TR", {
    month: "long",
    day: "numeric",
    year: "numeric",
    timeZone: "Europe/Istanbul",
  });

  if (!includeRelative) {
    return fullDate;
  }

  return `${fullDate} (${formattedRelative})`;
}
