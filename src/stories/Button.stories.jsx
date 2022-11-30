import Button from '../Components/Button/Button';
import React from 'react';

export default {
  title: 'My new Button',
  component: Button,
  argTypes: { handleClick: { action: 'handleClick' } },
};

const Template = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  backgroundColor: 'red',
  label: 'Press me',
  size: 'medium',
};
export const Green = Template.bind({});
Green.args = {
  backgroundColor: 'green',
  label: 'Press me',
  size: 'medium',
};
export const Blue = Template.bind({});
Blue.args = {
  backgroundColor: 'blue',
  label: 'Press me',
  size: 'medium',
};
export const Small = Template.bind({});
Small.args = {
  backgroundColor: 'red',
  label: 'Press me',
  size: 'small',
};
export const Large = Template.bind({});
Large.args = {
  backgroundColor: 'red',
  label: 'Press me',
  size: 'large',
};
export const LongLabel = Template.bind({});
LongLabel.args = {
  backgroundColor: 'red',
  label: 'ghfgoigiofd meu deus aaaaaaaa que diveritdoooo',
  size: 'medium',
};
