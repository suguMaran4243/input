import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ChildComponent,CommonModule],
  templateUrl: './app.component.html',
  
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'input-app';
  Fruits=[
    {
      id:1,
      name:'Applle',
      kg:'10kg'
    },
    {
      id:2,
      name:'Orange',
      kg:'30kg'

    },
    {
      id:3,
      name:'Mango',
      kg:'40kg'

    }
  ]
  customers=[];
  
  addItem(newItem :string)
  {
    this.customers.push(newItem);
    console.log('customer output after emiting', this.customers)
  }
}
