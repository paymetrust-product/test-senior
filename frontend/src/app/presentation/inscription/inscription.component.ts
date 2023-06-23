import {Component} from '@angular/core';
import {DomainArticleService} from "@core/services/domain-article.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {
  form!: FormGroup;
  error: string = '';
  loading: boolean = false;
  submitted: boolean = false;

  constructor(
    private domainNewsService: DomainArticleService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.loading = true;
    this.form = this.formBuilder.group({
      nom: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      prenoms: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      username: ['', Validators.required, Validators.minLength(3), Validators.maxLength(50)],
      password: ['', Validators.required, Validators.minLength(6), Validators.maxLength(50)],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    // reset alert on submit
    this.error = '';

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
  }
}
