//Inbuilt Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
//User Defined Imports
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { DetailsComponent } from './details/details.component';
import { UpdateAddressComponent } from './update-address/update-address.component';

const appRoutes : Routes = [ 
  {path : '',        component : LoginComponent},
 // This approach when header is also same 
   {path : 'home',    component : HomeComponent ,
     children : [ 
     // {path :'details', component : DetailsComponent},
    ]
   },
   {path :'details', component : DetailsComponent},
   {path :'updateAddress', component : UpdateAddressComponent },
   {path : '**',      component : LoginComponent, redirectTo : ''}
]; 

const appRoutes1 : Routes = [{path : '',        component : LoginComponent},
// This approach when header is also same 
/* {path : 'home',    component : HomeComponent ,
    children : [ 
     {path :'details', component : DetailsComponent},
   ]
  },
  {path :'updateAddress', component : UpdateAddressComponent },*/
  
  //This approach when we need to make update address all as part of home page
  {path : 'home',    component : HomeComponent ,
  children : [ 
   {path :'details', component : DetailsComponent},
   {path :'updateAddress', component : UpdateAddressComponent }
   ]
},
  {path : '**',      component : LoginComponent, redirectTo : ''}
]; 



@NgModule({
  declarations : [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    FooterComponent,
    DetailsComponent,
    UpdateAddressComponent
  ],
  imports : [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers : [],
  bootstrap : [AppComponent]
})
export class AppModule { }