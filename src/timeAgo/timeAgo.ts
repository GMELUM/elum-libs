import decWord from '../decWord/decWord';

const timeAgo = (timestamp: number) => {
  if (!timestamp) return "только что"
  const date = new Date(timestamp);
  const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
  const dayMonthString = () => new Intl.DateTimeFormat('RU-ru', { day: "numeric", month: "short" }).format(date).replace(".", "");
  const hourMinuteString = () => date.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
  const lasing = (title: Array<string> | string, end: string, count: number) =>
    Array.isArray(title) ? `${count} ${decWord(count, title)} ${end}` : `${title} ${end}`;
  switch (true) {
    case (seconds < 0): return "скоро";
    case (seconds < 60): return lasing(["секунду", "секунды", "секунд"], "назад", seconds);
    case (seconds < 3600): return lasing(["минуту", "минуты", "минут"], "назад", Math.floor(seconds / 60));
    case (seconds < 7200): return lasing("час", "назад", Math.floor(seconds / 3600));
    case (seconds < 10800): return lasing("два часа", "назад", Math.floor(seconds / 3600));
    case (seconds < 14400): return lasing("три часа", "назад", Math.floor(seconds / 3600));
    case (seconds < 86400): return lasing(`сегодня в ${hourMinuteString()}`, "", Math.floor(seconds / 3600));
    case (seconds < 172800): return lasing(`вчера в ${hourMinuteString()}`, "", Math.floor(seconds / 86400));
    case (seconds < 259200): return lasing("два дня", "назад", Math.floor(seconds / 86400));
    case (seconds < 345600): return lasing("три дня", "назад", Math.floor(seconds / 86400));
    case (seconds < 31536000): return lasing(`${dayMonthString()} в ${hourMinuteString()}`, "", Math.floor(seconds / 86400));
    case (seconds >= 31536000): return lasing(`${dayMonthString()} ${date.getFullYear()} г.`, "", Math.floor(seconds / 31536000));
  }
  return "только что";
}

export default timeAgo;
