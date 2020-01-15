import { TaskComponent } from '../../app/app/tutorial-components/a-storybook-with-angular/task/task.component';

export default {
    title: 'A Storybook With Angular | Task',
    decorators: [
        // withKnobs
    ]
};

export const Default = () => ({
    component: TaskComponent
});
