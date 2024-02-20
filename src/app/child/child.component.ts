import { Component, Input,Output,EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  constructor()

{
  console.log('CONSTRUCTOR IS CALLED');
  
}  @Input()
fruits:
  {
    id:number;
    name:string;
    kg:string;
  }
  
  @Output() newEvent=new EventEmitter<string>();
  addNewItem(value :string)
  {
    this.newEvent.emit(value);  
  }
 customer:string []=['Sugu','Sathur','Dinesh']
}
