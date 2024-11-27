import { useState, useCallback } from 'react';

export const useAnimationComplete = (initialState = false) => {
  const [isComplete, setIsComplete] = useState(initialState);

  const handleAnimationComplete = useCallback(() => {
    setIsComplete(true);
  }, []);

  return [isComplete, handleAnimationComplete];
};