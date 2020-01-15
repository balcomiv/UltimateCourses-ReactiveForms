import { TaskListComponent } from '../../app/app/tutorial-components/a-storybook-with-angular/task-list/task-list.component';

export default {
    title: 'A Storybook With Angular | Task List',
    decorators: [
        // withKnobs
    ]
};

export const Default = () => ({
    component: TaskListComponent
});
