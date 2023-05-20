import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatCardHeader, MatCardTitle, MatCardContent, MatCardActions } from '@angular/material/card';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [...products];

  share() {
    window.alert('The product has been shared!');
  }
  onCardClick(product: any) {
    console.log('Card clicked:', product);
    // Lógica adicional que você deseja executar ao clicar no card
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/