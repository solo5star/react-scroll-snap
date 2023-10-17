import type { ScrollSnapProps } from '../types';
import ScrollSnapCSS from './ScrollSnapCSS/ScrollSnapCSS';
import ScrollSnapImpl from './ScrollSnapImpl/ScrollSnapImpl';

type ScrollSnapMode = 'auto' | 'css' | 'impl';

const isMobile = /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i.test(window.navigator.userAgent);

const isIOS = /(iPad)|(iPhone)|(iPod)/i.test(window.navigator.userAgent);

const automaticallyChooseScrollSnapImplementation = () => {
  if (isIOS) return ScrollSnapCSS;
  if (isMobile) return ScrollSnapImpl;

  return ScrollSnapCSS;
};

type ScrollSnapWithMode = ScrollSnapProps & {
  // auto일 시 userAgent의 값에 따라 mode를 결정
  // css일 시 ScrollSnapCSS 사용
  // impl일 시 ScrollSnapImpl 사용
  mode?: ScrollSnapMode;
};

const ScrollSnap = (props: ScrollSnapWithMode) => {
  const { mode = 'auto', ...restProps } = props;

  const ScrollSnapImplementation =
    mode === 'auto' ? automaticallyChooseScrollSnapImplementation() : mode === 'css' ? ScrollSnapCSS : ScrollSnapImpl;

  return <ScrollSnapImplementation {...restProps} />;
};

export default ScrollSnap;
