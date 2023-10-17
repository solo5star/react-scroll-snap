import type { PropsWithChildren, ReactNode } from 'react';
import { useMemo, useState } from 'react';
import type { EasingFunction } from '..';
import { easeOutExpo } from '..';
import type { ScrollSnapContextValue } from '../contexts/ScrollSnapContext';
import ScrollSnapContext from '../contexts/ScrollSnapContext';

type ScrollSnapProviderProps<Item> = PropsWithChildren<{
  activeIndex?: number;
  onActiveIndexChange?: (activeIndex: number) => void;
  scrollPosition?: number;
  onScrollPositionChange?: (scrollPosition: number) => void;
  enableRolling?: boolean;
  easingFunction?: EasingFunction;
  items: Item[];
  itemRenderer: (item: Item, index: number) => ReactNode;
}>;

const ScrollSnapProvider = <Item,>(props: ScrollSnapProviderProps<Item>) => {
  const [uncontrolledActiveIndex, setUncontrolledActiveIndex] = useState(0);
  const [uncontrolledScrollPosition, setUncontrolledScrollPosition] = useState(0);

  const {
    activeIndex = uncontrolledActiveIndex,
    onActiveIndexChange = setUncontrolledActiveIndex,
    scrollPosition = uncontrolledScrollPosition,
    onScrollPositionChange = setUncontrolledScrollPosition,
    enableRolling = false,
    easingFunction = easeOutExpo,
    items,
    itemRenderer,
    children,
  } = props;

  const contextValue = useMemo<ScrollSnapContextValue>(
    () => ({
      activeIndex,
      onActiveIndexChange,
      scrollPosition,
      onScrollPositionChange,
      enableRolling,
      easingFunction,
      items,
      itemRenderer,
    }),
    [
      activeIndex,
      onActiveIndexChange,
      scrollPosition,
      onScrollPositionChange,
      enableRolling,
      easingFunction,
      items,
      itemRenderer,
    ],
  );

  return <ScrollSnapContext.Provider value={contextValue}>{children}</ScrollSnapContext.Provider>;
};

export default ScrollSnapProvider;
