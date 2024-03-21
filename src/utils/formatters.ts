function formatTime(value: number) {
  return Math.abs(value).toString().padStart(2, '0');
}

export { formatTime };
