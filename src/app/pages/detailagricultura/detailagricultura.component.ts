import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailagricultura',
  templateUrl: './detailagricultura.component.html',
  styleUrls: ['./detailagricultura.component.css']
})
export class DetailagriculturaComponent implements OnInit {

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

  rutaActual:any;

  constructor( private route: ActivatedRoute ) { 
    this.rutaActual = this.route.snapshot.paramMap.get('servicio');
  }

  ngOnInit(): void {
  }

}
