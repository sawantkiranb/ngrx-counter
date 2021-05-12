import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss']
})
export class AddPostComponent implements OnInit {
  postForm: FormGroup;
  get form() {
    return this.postForm.controls;
  }
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.postForm = this.fb.group({
      title: [null, [Validators.required, Validators.maxLength(25)]],
      description: [null, [Validators.required, Validators.maxLength(25)]]
    });
  }

  onSubmit() {
    console.log(this.postForm.value);

  }

}
