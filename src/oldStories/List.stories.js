import React from 'react';
import { List } from '../components/formComponents/List';
import { ListItem } from '../components/formComponents/ListItem';

export default {
  component: List,
  title: "Kosz/Input",
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Empty = (args) => <List {...args} />;

export const OneItem = (args) => (
  <List {...args}>
    <ListItem text='foo' />
  </List>
);

export const ManyItems = (args) => (
  <List {...args}>
    <ListItem {...args} />
    <ListItem {...args} />
    <ListItem {...args} />
  </List>
);