let debounceTimer;
export const returnDebouncedFunc = (mainFunction, delay) => {
  return function (...args) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      mainFunction(...args);
    }, delay);
  };
};


export function setCookie(name, value, daysToExpire) {
  var expires = "";

  if (daysToExpire) {
    var date = new Date();
    date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }

  document.cookie = name + "=" + value + expires + "; path=/";
}

export const parseJson = (jsonString) => {
  try {
    return JSON.parse(jsonString)
  } catch {
    return jsonString;
  }
}