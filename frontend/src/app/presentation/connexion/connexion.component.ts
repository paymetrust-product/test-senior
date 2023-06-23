import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DomainArticleService} from "@core/services/domain-article.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent {
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
