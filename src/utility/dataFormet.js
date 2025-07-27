export default function timeAgo(date, lang = "en") {
  const now = new Date();
  const seconds = Math.floor((now - new Date(date)) / 1000);

  const formats = {
    en: [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ],
    hi: [
      { label: "साल", seconds: 31536000 },
      { label: "महीना", seconds: 2592000 },
      { label: "सप्ताह", seconds: 604800 },
      { label: "दिन", seconds: 86400 },
      { label: "घंटा", seconds: 3600 },
      { label: "मिनट", seconds: 60 },
      { label: "सेकंड", seconds: 1 },
    ],
  };

  const labels = formats[lang] || formats.en;

  for (const interval of labels) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return lang === "hi"
        ? `${count} ${interval.label}${count > 1 ? "ों" : ""} पहले`
        : `${count} ${interval.label}${count > 1 ? "s" : ""} ago`;
    }
  }

  return lang === "hi" ? "अभी अभी" : "just now";
}
