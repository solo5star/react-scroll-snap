/* eslint-disable react-hooks/rules-of-hooks */
import type { Meta, StoryObj } from '@storybook/react';

import { easeOutBounce } from '..';
import ScrollSnap from '../components/ScrollSnap';
import useScrollSnapItemContext from '../hooks/useScrollSnapItemContext';
import ScrollSnapProvider from '../providers/ScrollSnapProvider';

const meta: Meta<typeof ScrollSnap> = {
  title: 'ScrollSnap',
  component: ScrollSnap,
};

export default meta;

type Story = StoryObj<typeof ScrollSnap>;

type ListItemProps = {
  color: string;
};

const ListItem = (props: ListItemProps) => {
  const { color } = props;

  return (
    <div
      style={{
        background: color,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '32px',
      }}
    >
      ◀ {color} ▶
    </div>
  );
};

type Item = { color: string };

const items: Item[] = [
  { color: 'red' },
  { color: 'orange' },
  { color: 'yellow' },
  { color: 'green' },
  { color: 'blue' },
  { color: 'purple' },
];

const scrollSnapStyle: React.CSSProperties = {
  width: '400px',
  height: '500px',
};

export const Default: Story = {
  render: () => (
    <ScrollSnapProvider items={items} itemRenderer={(item) => <ListItem color={item.color} />}>
      <ScrollSnap mode="impl" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};

export const WithRolling: Story = {
  render: () => (
    <ScrollSnapProvider items={items} itemRenderer={(item) => <ListItem color={item.color} />} enableRolling>
      <ScrollSnap mode="impl" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};

export const WithEaseOutBounce: Story = {
  render: () => (
    <ScrollSnapProvider
      items={items}
      itemRenderer={(item) => <ListItem color={item.color} />}
      easingFunction={easeOutBounce}
    >
      <ScrollSnap mode="impl" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};

const AnimatedListItem = (props: ListItemProps) => {
  const { offset, position } = useScrollSnapItemContext();

  return (
    <div
      style={{
        height: '100%',
        transform:
          offset === 1
            ? `translateY(${(position - 1) * 100}%) rotate(${(1 - position) * 20}deg) scale(${position})`
            : offset === 0
            ? `translateY(${position * 100}%) rotate(${position * 20}deg) scale(${1 - position})`
            : undefined,
      }}
    >
      <ListItem {...props} />
    </div>
  );
};

export const WithSnapAnimation: Story = {
  render: () => (
    <ScrollSnapProvider items={items} itemRenderer={(item) => <AnimatedListItem color={item.color} />}>
      <ScrollSnap mode="impl" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};

export const CSSMode: Story = {
  render: () => (
    <ScrollSnapProvider items={items} itemRenderer={(item) => <ListItem color={item.color} />}>
      <ScrollSnap mode="css" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};

export const AutoMode: Story = {
  render: () => (
    <ScrollSnapProvider items={items} itemRenderer={(item) => <ListItem color={item.color} />}>
      <ScrollSnap mode="auto" style={scrollSnapStyle} />
    </ScrollSnapProvider>
  ),
};
