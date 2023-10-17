# react-scroll-snap

Scroll snap의 동작을 React 상에서 구현한 라이브러리입니다.

현재 제한적인 케이스에서만 사용을 지원합니다.

* 리스트 아이템이 `height: 100%` 이어야 한다

## Getting Started

```sh
npm install react react-dom styled-components
```
이 라이브러리를 사용하는 데에 필요한 peer dependency들을 설치해줍니다.

```sh
npm install @solo5star/react-scroll-snap
```

```tsx
const items = [
   { color: 'red' },
   { color: 'orange' },
   { color: 'yellow' },
];

<ScrollSnapProvider items={items} itemRenderer={(item) => <div>{item.color}</div>}>
  <ScrollSnap mode="impl" style={{ width: '300px', height: '500px' }} />
</ScrollSnapProvider>
```
