import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./core/navbar/navbar.component";
import {FooterComponent} from "./core/footer/footer.component";
import {DataObserveService} from "./observable/dataobserve.service";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'front-end';

  deactivate: boolean = true;
  constructor(private $DataObservableService: DataObserveService) {
    this.$DataObservableService.$NavFooter.subscribe(insert=>{
      this.deactivate =insert;
    })
  }

}
