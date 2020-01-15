import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskComponent } from './task/task.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskBoardComponent } from './task-board/task-board.component';



@NgModule({
  declarations: [
    TaskComponent,
    TaskListComponent,
    TaskBoardComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    TaskComponent,
    TaskListComponent,
    TaskBoardComponent
  ]
})
export class AStorybookWithAngularModule { }
