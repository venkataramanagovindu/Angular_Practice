import { Component, OnInit, HostListener, Directive, ElementRef } from '@angular/core';
import { Observable, from } from 'rxjs';
import { fromEvent } from 'rxjs';
import { throttleTime, scan , map } from 'rxjs/operators';
import {of} from 'rxjs';
import {StudentService} from '../Student.service';
import { Student } from 'src/Student';
import { error } from '@angular/compiler/src/util';
import { Title } from '@angular/platform-browser';
// fromEvent(document, 'click').subscribe((e) => console.log(e));

fromEvent(document, 'click')
  .pipe(
    throttleTime(1000),
    map(event => event.AT_TARGET),
    scan((count, clientX) => count + clientX, 0)
  )
  .subscribe(count => console.log(count));


  //Observable Ex

  
  const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    // subscriber.error('custom error');
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 1000);
  });


  


//12/sep/2019

const observable2 = new Observable(function sub(s) {
  s.next("first next");
  s.next("second next");
  s.error("some error has occured");
  s.complete();
  
}
);

//observable2.next();

console.log("observable2");
observable2.subscribe(
  {
    next(x){console.log("observable2 next "+x);
    },
    error(err){console.log("observable2 err "+err);
    },
    complete(){console.log("completed");
    }
  }
)

const observable3 = new Observable(function subscribe(subscriber) {
  const id = setInterval(() => {
    subscriber.next('hi')
  }, 1000);
});


 
  const ob = of(1,2,3,4,5,6);
  const observer = {
    next : x => {console.log('next ' + x)}
    };

  ob.subscribe(observer);

  //Multi casting Example
  function sequenceSubscriber(observer) {
  const seq = [1, 2, 3];
  let timeoutId;

  // Will run through an array of numbers, emitting one value
  // per second until it gets to the end of the array.
  function doSequence(arr, idx) {
    timeoutId = setTimeout(() => {
      observer.next(arr[idx]);
      if (idx === arr.length - 1) {
        observer.complete();
      } else {
        doSequence(arr, ++idx);
      }
    }, 1000);
  }

  doSequence(seq, 0);

  // Unsubscribe should clear the timeout to stop execution
  return {unsubscribe() {
    clearTimeout(timeoutId);
  }};
}

// Create a new Observable that will deliver the above sequence
const sequence = new Observable(sequenceSubscriber);

sequence.subscribe({
  next(num) { console.log(num); },
  complete() { console.log('Finished sequence'); }
});

// Logs:
// (at 1 second): 1
// (at 2 seconds): 2
// (at 3 seconds): 3
// (at 3 seconds): Finished sequence







@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _StudentService : StudentService){
    console.log('In Constructor');
  }
  title = 'rxjs-learn';
  condition : boolean = false;

  // @HostListener('click',['$event'])
  // onClick(e : Event) : void{
  //   alert(e.target);
  // }


  ngOnInit(){
  //  // console.log('just before subscribe');
  //  this.title += 'just before subscribe \n'
  //   observable.subscribe({
  //     next(x) { 
  //       alert( this.title);
  //       this.title +=`got value <br/>   ${x}`; },
  //     error(err) { this.title += `something wrong occurred: <br/>  ${err}`; },
  //     complete() { this.title += `done <br/>`; }
  //   });
  //   this.title += 'just after subscribe';
    
    //Subscribing to student observer
   
  }





  
  
  // fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));

}
