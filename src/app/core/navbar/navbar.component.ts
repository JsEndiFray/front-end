import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {RouterLink} from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatToolbarModule,
    MatAnchor,
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
