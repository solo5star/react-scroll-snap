import type { PropsWithChildren } from 'react';
import { useMemo } from 'react';
import type { ScrollSnapItemContextValue } from '../contexts/ScrollSnapItemContext';
import ScrollSnapItemContext from '../contexts/ScrollSnapItemContext';

type ScrollSnapItemProviderProps = PropsWithChildren<{
  offset: number;
  position: number;
}>;

const ScrollSnapItemProvider = (props: ScrollSnapItemProviderProps) => {
  const { offset, position, children } = props;

  const contextValue = useMemo<ScrollSnapItemContextValue>(
    () => ({
      offset,
      position,
    }),
    [offset, position],
  );

  return <ScrollSnapItemContext.Provider value={contextValue}>{children}</ScrollSnapItemContext.Provider>;
};

export default ScrollSnapItemProvider;
