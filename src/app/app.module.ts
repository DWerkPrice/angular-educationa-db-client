import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from  '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MajorListComponent } from './major/major-list/major-list.component';
import { MajorDetailComponent } from './major/major-detail/major-detail.component';
import { MajorCreateComponent } from './major/major-create/major-create.component';
import { MajorEditComponent } from './major/major-edit/major-edit.component';
import { MenuComponent } from './menu/menu/menu.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { StudentCreateComponent } from './student/student-create/student-create.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { SortPipe } from './pipes/sort.pipe';
import { MenuitemComponent } from './menu/menuitem/menuitem.component';
//import { MajorFindComponent } from './major-find/major-find.component';
import { CheckCodeComponent } from './major/check-code/check-code.component';
import { MajorSearchPipe } from './major/major-search.pipe';
import { StudentSearchPipe } from './student/student-search.pipe';

@NgModule({// just trying to restart
  declarations: [
    AppComponent,
    MajorListComponent,
    MajorDetailComponent,
    MajorCreateComponent,
    MajorEditComponent,
    MenuComponent,
    StudentListComponent,
    StudentDetailComponent,
    StudentCreateComponent,
    StudentEditComponent,
    SortPipe,
    MenuitemComponent,
 //   MajorFindComponent,
    CheckCodeComponent,
    MajorSearchPipe,
    StudentSearchPipe
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
