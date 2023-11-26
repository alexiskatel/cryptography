import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptageComponent } from './components/cesar/cryptage/cryptage.component';
import { DecryptageComponent } from './components/cesar/decryptage/decryptage.component';
import { CryptagePolybeComponent } from './components/polybe/cryptage/cryptage-polybe.component';
import { DecryptagePolybeComponent } from './components/polybe/decryptage/decryptage-polybe.component';
import { CryptageAffineComponent } from './components/affine/cryptage/cryptage-affine.component';
import { DecryptageAffineComponent } from './components/affine/decryptage/decryptage-affine.component';

const routes: Routes = [
  {
    path: '',
    component: CryptageComponent
  },
  {
    path: 'decryptage-cesar',
    component: DecryptageComponent
  },
  {
    path: 'polybe',
    component: CryptagePolybeComponent
  },
  {
    path: 'decryptage-polybe',
    component: DecryptagePolybeComponent
  },
  {
    path: 'affine',
    component: CryptageAffineComponent
  },
  {
    path: 'decryptage-affine',
    component: DecryptageAffineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
