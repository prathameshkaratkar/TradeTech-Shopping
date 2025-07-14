import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { AboutComponent } from './about-component/about-component';
import { ContactComponent } from './contact-component/contact-component';
import { ShopComponent } from './shop-component/shop-component';
import { Login } from './login/login';
import { Register } from './register/register';
import { UserList } from './user-list/user-list';
import { CartComponent } from './cart-component/cart-component';
import { Products } from './admin/products/products';

export const routes: Routes = [
    { path: '', component: HomeComponent }, 
    {path: 'about',component:AboutComponent},
    {path: 'contact',component:ContactComponent},
    {path: 'shop',component:ShopComponent},
    {path: 'login',component:Login},
    {path: 'register',component:Register},
    {path: 'register/all', component:UserList},
    {path: 'cart', component:CartComponent},
    {path: 'admin', component:Products}

];
