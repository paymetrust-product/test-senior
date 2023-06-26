import {Component} from '@angular/core';
import {DomainCategoryService} from "@core/services/domain-category.service";
import {Category} from "@core/interfaces/Category";

@Component({
  selector: 'app-user-layout',
  templateUrl: './user-layout.html',
  styleUrls: ['./user-layout.scss']
})
export class UserLayoutComponent {
  categories: Category[] = [];
  loading: boolean = true;

  constructor(private domainCategoryService: DomainCategoryService) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.domainCategoryService.getCategories().subscribe((category: Category[]) => {
      this.loading = false;
      this.categories = category;
    });
  }
}
