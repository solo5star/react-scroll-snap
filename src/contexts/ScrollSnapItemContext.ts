import { createContext } from 'react';

export type ScrollSnapItemContextValue = {
  // 이전 아이템인지, 현재 아이템인지, 이후 아이템인지 여부를 나타내는 숫자
  // -1 | 0 | 1 혹은 number
  offset: number;
  // 0.0 ~ 1.0
  position: number;
};

const ScrollSnapItemContext = createContext<ScrollSnapItemContextValue | null>(null);

export default ScrollSnapItemContext;
