import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CryptageComponent } from './components/cesar/cryptage/cryptage.component';
import { DecryptageComponent } from './components/cesar/decryptage/decryptage.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './components/sidebar/sidebar/sidebar.component';
import { CryptagePolybeComponent } from './components/polybe/cryptage/cryptage-polybe.component';
import { DecryptagePolybeComponent } from './components/polybe/decryptage/decryptage-polybe.component';
import { DecryptageAffineComponent } from './components/affine/decryptage/decryptage-affine.component';
import { CryptageAffineComponent } from './components/affine/cryptage/cryptage-affine.component';

@NgModule({
  declarations: [
    AppComponent,
    CryptageComponent,
    DecryptageComponent,
    SidebarComponent,
    CryptagePolybeComponent,
    DecryptagePolybeComponent,
    DecryptageAffineComponent,
    CryptageAffineComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
