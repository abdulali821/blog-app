export const useDebounce = (func: Function, delay: number) => {
  let timer: any = null;

  return (...args: any[]) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
