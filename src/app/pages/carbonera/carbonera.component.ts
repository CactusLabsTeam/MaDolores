import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-carbonera',
  templateUrl: './carbonera.component.html',
  styleUrls: ['./carbonera.component.css']
})
export class CarboneraComponent implements OnInit {

  isScrolledToBottom = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    if (scrollTop + windowHeight >= scrollHeight) {
      this.isScrolledToBottom = true;
    } else {
      this.isScrolledToBottom = false;
    }
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  constructor() { }

  ngOnInit(): void {
  }

}
