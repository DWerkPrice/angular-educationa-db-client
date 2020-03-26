import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MajorListComponent } from './major/major-list/major-list.component';// added from some other file
import { MajorDetailComponent } from './major/major-detail/major-detail.component';// added from some other file
import { MajorCreateComponent } from './major/major-create/major-create.component';// added from some other file
import { MajorEditComponent } from './major/major-edit/major-edit.component';// added from some other file
import { CheckCodeComponent } from './major/check-code/check-code.component';
import { StudentListComponent } from './student/student-list/student-list.component';// added from some other file
import { StudentDetailComponent } from './student/student-detail/student-detail.component';// added from some other file
import { StudentCreateComponent } from './student/student-create/student-create.component';// added from some other file
import { StudentEditComponent } from './student/student-edit/student-edit.component';// added from some other file
const routes: Routes = [//added path statements
  {path:"", redirectTo:"/majors/list", pathMatch: "full"},
  {path:"majors/list",component: MajorListComponent},
  {path:"majors/detail/:id",component: MajorDetailComponent},
  {path:"majors/create",component: MajorCreateComponent},
  {path:"majors/edit/:id",component: MajorEditComponent},
  {path:"majors/code",component: CheckCodeComponent},
  {path:"students/list",component: StudentListComponent},
  {path:"students/detail/:id",component: StudentDetailComponent},
  {path:"students/create",component: StudentCreateComponent},
  {path:"students/edit/:id",component: StudentEditComponent},
  {path: "**",component: StudentListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
