import { SigninComponent } from './components/signin/signin.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ProductComponent } from './components/product/product.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { LogoComponent } from './components/logo/logo.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: ' ' , component: LogoComponent},
  {path: 'recipes' , component: RecipesComponent },
  {path: 'product' , component: ProductComponent },
  {path: 'contactus' , component: ContactusComponent},
  {path: 'about' , component: AboutComponent},
  {path: 'signin' , component: SigninComponent},
  {path: 'login' , component: LoginComponent},
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
