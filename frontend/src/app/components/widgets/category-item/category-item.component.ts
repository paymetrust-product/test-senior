import { Component, Input } from '@angular/core';
import { category } from 'src/app/core/interfaces/types';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss']
})
export class CategoryItemComponent {
  @Input() category ?: category;
}
