import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {
 
  startIndex : any = 0;

  constructor() { }

  ngOnInit(): void {
    this.Repeat();
  }
  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 2000);
  }
  
  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
   
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }

    if (this.startIndex > slides.length - 1) {
       this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;

    } 
    else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
}
  
}
