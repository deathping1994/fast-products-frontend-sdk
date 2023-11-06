let debounceTimer;
export const debounce = (mainFunction, delay) => {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};