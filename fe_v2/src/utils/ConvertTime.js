export default function ConvertTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - hours * 3600) / 60);
    let second = seconds - hours * 3600 - minutes * 60;
    return seconds > 3600
    ? `${hours.toString().padStart(2, "0")}:
                              ${minutes.toString().padStart(2, "0")} :
                              ${second.toString().padStart(2, "0")}`
    : `${minutes.toString().padStart(2, "0")} :
                            ${second.toString().padStart(2, "0")}`;
  }
  