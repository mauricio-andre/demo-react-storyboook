import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SignInPage from '../../../src/pages/SignIn';

export default {
  title: 'Pages/SignIn',
  component: SignInPage,
  parameters: {
    layout: 'none',
  },
} as ComponentMeta<typeof SignInPage>;

const Template: ComponentStory<typeof SignInPage> = (args) => <SignInPage {...args} />;

export const SignIn = Template.bind({});
SignIn.args = {
  children: 'Simple header',
};
