import { EntityDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Injectable()
export abstract class BaseDependantFormComponent<T extends EntityDto<number>> {
  model: T;
  form: FormGroup;
  loading: boolean = false;

  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig
  ) {}

  ngOnInit() {
    this.model = <T>{};
    this.model.id = 0;
    if (this.config.data?.model) {
      this.model = this.config.data.model;
    }
    this.buildForm();
  }

  save() {
    if (this.form.invalid) {
      console.log('Invalid form');
      return;
    }
    this.dialogRef.close(this.form);
  }

  requiredIfValidator(predicate) {
    return formControl => {
      if (!formControl.parent) {
        return null;
      }
      if (predicate()) {
        return Validators.required(formControl);
      }
      return null;
    };
  }

  refreshValidator(conditionalControl: string, validatedControl: string) {
    this.form
      .get(conditionalControl)
      .valueChanges.subscribe(v => this.form.get(validatedControl).updateValueAndValidity());
  }

  abstract buildForm();
}
