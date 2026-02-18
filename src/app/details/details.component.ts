import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <p>
      details works!
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

}
