// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-MyReactiveForm',
//   templateUrl: './MyReactiveForm.component.html',
//   styleUrls: ['./MyReactiveForm.component.css']
// })
// export class MyReactiveFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }


import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormBuilder ,Validators , FormArray} from '@angular/forms';

@Component({
 selector: 'app-MyReactiveForm',
 templateUrl: 'MyReactiveForm.component.html',
 styleUrls: ['MyReactiveForm.component.css'],
//  moduleId : module.id
})
export class MyReactiveFormComponent implements OnInit {



 //for arrayData
 get arrayData(){
   // alert(this.userDetailsForm.get('arrayData'));
   return this.userDetailsForm.get('arrayData') as FormArray
 }

 addArrayData() {
   this.arrayData.push(this.formBuilder.control(''));
 }

 constructor(private formBuilder : FormBuilder) { }

 ngOnInit() {
 }
 FirstNameControl = new FormControl('');
  // Form Group
 /*userDetailsForm = new FormGroup({
   FirstNameCon : new FormControl(''),
   LastNameCon : new FormControl(''),
   EmailCon : new FormControl(),
   PasswordCon : new FormControl(),
   UserAddress : new FormGroup({
     Hno : new FormControl(''),
     street : new FormControl(""),
     city : new FormControl('')
   })
 })*/

 // Form FormBuilder

 userDetailsForm = this.formBuilder.group({
   FirstNameCon : ['', Validators.required],
   LastNameCon : [''],
   EmailCon : [''],
   PasswordCon : [''],
   UserAddress : this.formBuilder.group({
     Hno : [''],
     street : [''],
     city : ['']
   }),
   arrayData : this.formBuilder.array([
     this.formBuilder.control('')
   ])
 });
 onclick(){
  //  this.FirstNameControl.valueChanges.subscribe((x) => {
  //    alert(x);
  //  });
  // alert(this.FirstNameControl.value);
   this.FirstNameControl.setValue('1234556');
   var x = this.userDetailsForm.getRawValue();
   var y = this.userDetailsForm.get('FirstNameCon');
   this.userDetailsForm.get('FirstNameCon').setValue('changed');
   // console.log(x.FirstNameCon);
   console.log(this.userDetailsForm.value);
   console.log(y);
 }

 //
 onSubmit(){
   console.warn(this.userDetailsForm.value);
 }

 //Update form values using patchValue() method
 //patchvalue used for partial update of formgroup
 updateForm(){
   this.userDetailsForm.patchValue({
     FirstNameCon : 'First Name',
     UserAddress : {
       Hno : "5-6-99"
     }
   });
  //  this.userDetailsForm.setValue({
  //   FirstNameCon : 'First Name with set value',
  //   LastNameCon : 'some last name'
  //  })
 }

}

