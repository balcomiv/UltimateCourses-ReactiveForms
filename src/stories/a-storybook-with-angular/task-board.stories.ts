import {
    TaskBoardComponent,
} from '../../app/app/tutorial-components/a-storybook-with-angular/task-board/task-board.component';

export default {
    title: 'A Storybook With Angular | Task Board',
    decorators: [
        // withKnobs
    ]
};

export const Default = () => ({
    component: TaskBoardComponent
});
