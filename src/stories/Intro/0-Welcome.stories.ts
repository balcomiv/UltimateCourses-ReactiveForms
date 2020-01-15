import { Welcome } from '@storybook/angular/demo';

export default {
  title: 'Intro | Welcome',
};

export const toStorybook = () => ({
  component: Welcome,
  props: {},
});

toStorybook.story = {
  name: 'to Storybook',
};
