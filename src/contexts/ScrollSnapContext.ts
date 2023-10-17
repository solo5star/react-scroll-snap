import type { ReactNode } from 'react';
import { createContext } from 'react';
import type { EasingFunction } from '..';

export type ScrollSnapContextValue = {
  // position of currently active item. (equiv with index)
  // always 0..items.length (positive integer)
  activeIndex: number;
  onActiveIndexChange: (activeIndex: number) => void;
  // scroll position of container
  scrollPosition: number;
  onScrollPositionChange: (scrollPosition: number) => void;
  // enable continuity scrolling at the end of item
  enableRolling: boolean;
  easingFunction: EasingFunction;
  items: unknown[];
  itemRenderer(item: unknown, index: number): ReactNode;
};

const ScrollSnapContext = createContext<ScrollSnapContextValue | null>(null);

export default ScrollSnapContext;
