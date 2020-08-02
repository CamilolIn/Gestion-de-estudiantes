import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AddestudentComponent } from './component/addestudent/addestudent.component';
import { ShowstudentComponent } from './component/showstudent/showstudent.component';
import { from } from 'rxjs';
import { DetstudentComponent } from './component/detstudent/detstudent.component';
import { EditComponent } from './component/edit/edit.component';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'home', component: HomeComponent},
  {path:'students', component: AddestudentComponent},
  {path:'show-students', component: ShowstudentComponent},
  {path:'detstudent/:id', component: DetstudentComponent},
  {path:'editStudent/:id', component: EditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddestudentComponent,
    ShowstudentComponent,
    DetstudentComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
