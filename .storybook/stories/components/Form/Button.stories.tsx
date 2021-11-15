import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../../../../src/components/Form/Button';

export default {
  title: 'Form/Button',
  component: Button,
  argTypes: {
    click: {
      action: 'clicked',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'submit',
  children: 'Enviar',
  click: () => alert('Supimpa'),
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'button',
  primary: false,
  children: 'Enviar',
};

export const WithoutText = Template.bind({});
WithoutText.args = {
  type: 'button',
  click: () => alert('Supimpa'),
};
