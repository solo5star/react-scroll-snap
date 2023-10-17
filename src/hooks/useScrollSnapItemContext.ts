import { useContext } from 'react';
import ScrollSnapItemContext from '../contexts/ScrollSnapItemContext';

const useScrollSnapItemContext = () => {
  const context = useContext(ScrollSnapItemContext);

  if (context === null) {
    throw new Error('You should use ScrollSnapItemProvider!');
  }

  return context;
};

export default useScrollSnapItemContext;
