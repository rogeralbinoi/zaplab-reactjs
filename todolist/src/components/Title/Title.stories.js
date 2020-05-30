import React from 'react';
import Title from './Title';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Title',
  component: Title,
};

export const TitleExample = () => <Title>Hello World</Title>;
