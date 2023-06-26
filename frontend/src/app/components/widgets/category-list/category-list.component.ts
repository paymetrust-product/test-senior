import { Component, Input } from '@angular/core';
import { category } from 'src/app/core/interfaces/types';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent {
  @Input() categories  ?: category[];
}
