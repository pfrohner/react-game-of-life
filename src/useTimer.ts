import { useRef, useState, useEffect } from 'react';

export default function useTimer(callback: Function, interval: number) {
  const [running, setRunning] = useState<Boolean>(false);
  const fn = useRef<Function>(callback);
  fn.current = callback; 

  useEffect(
    () => {
      if (running) {
        const intervalId = setInterval(() => fn.current(), interval);
        
        return function cleanup() { 
          clearInterval(intervalId);
        }
      }
    },
    [running, interval]
  );

  return {
    running,
    toggle() {
      setRunning(state => !state);
    }
  };
}
