import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
   @ViewChild(MatSidenav)
   sidenav!: MatSidenav;

   longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

   constructor(private observer: BreakpointObserver) {}

   ngOnInit(): void {}

   ngAfterViewInit() {
      // Solucion para cuando se cambia un valor en un componente del DOM
      /* setTimeout(()=>{
         this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
            if (res.matches) {
               this.sidenav.mode = 'over';
               this.sidenav.close();
            } else {
               this.sidenav.mode = 'side';
               this.sidenav.open();
            }
         });
      },0); */
      // Otra solucion al mismo problema
      Promise.resolve().then(() => {
         this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
            if (res.matches) {
               this.sidenav.mode = 'over';
               this.sidenav.close();
            } else {
               this.sidenav.mode = 'side';
               this.sidenav.open();
            }
         });
      });
   }
}
