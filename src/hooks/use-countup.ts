import { useEffect, useState } from 'react';

export function useCountUp(target: number, duration = 1200, start = true) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = Date.now();
    const step = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * target);
      setCount(value);
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    step();
    // Cleanup
    return () => setCount(target);
  }, [target, duration, start]);

  return count;
}
