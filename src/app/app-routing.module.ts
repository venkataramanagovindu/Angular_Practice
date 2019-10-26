import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from '../Home/Home.component'
import { StudentDetailsComponent } from 'src/StudentDetails/StudentDetails.component';
import { MyReactiveFormComponent } from 'src/MyReactiveForm/MyReactiveForm.component';
import { MyTemplateDrivenHeroComponent } from 'src/My-TemplateDrivenHero/My-TemplateDrivenHero.component';
// import { MyDirectiveDirective } from '../my-directive.directive';
// import { StructuralDirective } from '../Structural.directive';
import { MyCustomPipePipe } from 'src/MyCustomPipe.pipe';


const routes: Routes = [
 // {path : '' , redirectTo : '/home' ,pathMatch : 'full'},
  {path :'home' ,component: HomeComponent},
  {path : 'StudentDetails' , component : StudentDetailsComponent},
  {path : 'Form' , component : MyReactiveFormComponent},
  {path : 'TemplateDrivenForm' , component : MyTemplateDrivenHeroComponent}];

@NgModule({
   imports: [
      RouterModule.forRoot(routes)
   ],
   exports: [
      RouterModule
   ],
   declarations: [
      //MyDirectiveDirective,
      //StructuralDirective,
      MyCustomPipePipe
   ]
})
export class AppRoutingModule { }
