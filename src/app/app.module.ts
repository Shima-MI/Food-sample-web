import { Taste } from './models/taste';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { BoxNewsComponent } from './components/box-news/box-news.component';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { LogoComponent } from './components/logo/logo.component';
import { RecipeslistComponent } from './components/recipeslist/recipeslist.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { TasteComponent } from './components/taste/taste.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { HeaderTwoComponent } from './components/header-two/header-two.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SigninComponent } from './components/signin/signin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactusComponent,
    ProductComponent,
    RecipesComponent,
    BoxNewsComponent,
    SlideshowComponent,
    LogoComponent,
    RecipeslistComponent,
    FooterComponent,
    LoginComponent,
    TasteComponent,
    HeaderTwoComponent,
    LayoutComponent,
    SigninComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [{
    provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
    useValue: {
       appearance: 'fill'
    }
 }],
  bootstrap: [AppComponent]
})
export class AppModule { }

