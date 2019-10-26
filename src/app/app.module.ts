import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from '../StudentDetails/StudentDetails.component';
import { HomeComponent } from '../Home/Home.component';
import { MyDirectiveDirective } from 'src/my-directive.directive';
import {StructuralDirective} from '../Structural.directive';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
// import { from } from 'rxjs';
import { MyReactiveFormComponent } from '../MyReactiveForm/MyReactiveForm.component';
import { MyTemplateDrivenHeroComponent } from '../My-TemplateDrivenHero/My-TemplateDrivenHero.component';
import { MyCustomPipePipe } from 'src/MyCustomPipe.pipe';

@NgModule({
   declarations: [
      AppComponent,
      StudentDetailsComponent,
      HomeComponent,
      MyDirectiveDirective,
      StructuralDirective,
      MyReactiveFormComponent,
      MyTemplateDrivenHeroComponent,
      MyCustomPipePipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
