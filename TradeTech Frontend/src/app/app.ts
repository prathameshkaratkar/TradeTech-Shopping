import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { ShopComponent } from './shop-component/shop-component';
import { AboutComponent } from './about-component/about-component';

@Component({
  selector: 'app-root',
  imports: [RouterModule, CommonModule, RouterLink, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'TradeTech';
}
