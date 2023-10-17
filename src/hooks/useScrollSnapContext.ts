import { useContext } from 'react';
import ScrollSnapContext from '../contexts/ScrollSnapContext';

const useScrollSnapContext = () => {
  const context = useContext(ScrollSnapContext);

  if (context === null) {
    throw new Error('You should use ScrollSnapProvider!');
  }

  return context;
};

export default useScrollSnapContext;
