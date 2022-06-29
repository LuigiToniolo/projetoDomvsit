import { useRef } from 'react';

const useDebounce = (funcao, delay) => {
  const timeoutRef = useRef(null);

  function debouncedFn(...args) {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      funcao(...args);
    }, delay);
  }

  return debouncedFn;
}
export default useDebounce;