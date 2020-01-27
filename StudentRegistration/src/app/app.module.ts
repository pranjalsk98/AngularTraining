import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { TdfComponent } from './tdf/tdf.component';
import { RfComponent } from './rf/rf.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BasenavComponent } from './basenav/basenav.component';

const routes: Routes=[
  { path: '', component: StudentDetailsComponent},
  { path: 'studentsList', redirectTo:'',pathMatch:'full'},
  { path: 'TemplateDriven', component: TdfComponent},
  { path: 'Reactive', component:RfComponent },
  { path: "**", component:PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    TdfComponent,
    RfComponent,
    PageNotFoundComponent,
    BasenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
  export const routingComponents=[ StudentDetailsComponent,
    TdfComponent,
    RfComponent,
    PageNotFoundComponent];
