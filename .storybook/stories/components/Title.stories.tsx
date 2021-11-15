import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleComponent from '../../../src/components/Title';

export default {
  title: 'Others/Title',
  component: TitleComponent,
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = (args) => <TitleComponent {...args} />;

export const Title = Template.bind({});
Title.args = {
  children: 'Simple header',
};
