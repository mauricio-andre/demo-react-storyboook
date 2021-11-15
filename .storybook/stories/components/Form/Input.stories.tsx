import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { FiUser } from 'react-icons/fi'
import Input from '../../../../src/components/Form/Input';

export default {
  title: 'Form/Input',
  component: Input,
  argTypes: {
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: false },
      description: 'default input placeholder',
      table: {
        type: {
          summary: 'details',
          detail: 'text displayed when Input is empty',
        },
      },
    },
    rest: {
      name: '...rest',
      type: { name: 'object', required: false },
      description: 'default html properties',
      table: {
        type: {
          summary: 'details',
          detail: 'all default properties of an html element of type input',
        },
      },
      control: null,
    },
    icon: {
      control: null,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const CompleteExample = Template.bind({});
CompleteExample.args = {
  id: 'user',
  label: 'Informe seu login',
  placeholder: 'Johndoe@example.com',
  icon: FiUser,
};

export const WithIconAndPlaceholder = Template.bind({});
WithIconAndPlaceholder.args = {
  placeholder: 'Informe seu login',
  icon: FiUser,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: 'Informe os dados',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Informe seu login',
};
