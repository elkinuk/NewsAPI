import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit {

  @Input() articleData: any;
  @Input() saveData:any;
  @Input() backLink:any;

  public articleForm: any;
  private submitted:boolean;

  constructor(private router: Router) {}

  onSubmit(){
    this.submitted = true;
    if(!this.articleForm.invalid) {
      this.saveData(this.articleForm);
    }
    this.router.navigate(['/news']);
  }

  get f() { return this.articleForm.controls; }

  ngOnInit() {
    this.articleForm = new FormGroup({
      title: new FormControl(this.articleData.title, Validators.required),
      author: new FormControl(this.articleData.author, Validators.required),
      urlToImage: new FormControl(this.articleData.urlToImage),
      content: new FormControl(this.articleData.content, Validators.required),
      description: new FormControl(this.articleData.description, Validators.required),
    });
  }
}
