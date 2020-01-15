import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
    title: 'Addons | Button',
    decorators: [
        withKnobs
    ]
};

export const SetText = () => ({
    template: `<button>{{text}}</button>`,
    props: {
        text: text('text', 'Some Text'),
    }
});
