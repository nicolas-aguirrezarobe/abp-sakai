import { EntityDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { finalize } from 'rxjs/operators';

@Injectable()
export abstract class BaseFormComponent<TEntityDto, TEntityEditDto extends EntityDto<any>> {
  model: TEntityEditDto;
  form: FormGroup;
  loading: boolean = false;
  saving: boolean = false;
  method: 'create' | 'edit' = 'create';

  constructor(
    protected formBuilder: FormBuilder,
    public dialogRef: DynamicDialogRef,
    protected config: DynamicDialogConfig,
    protected messageService: MessageService
  ) {}

  ngOnInit() {
    this.model = <TEntityEditDto>{};
    if (this.config.data?.id) {
      this.method = 'edit';
      this.model.id = this.config.data.id;
      this.loadData();
    }
    this.buildForm();
  }

  loadData() {
    this.loading = true;
    this.getSourceObservable()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(result => {
        this.model = result;
        this.buildForm();
      });
  }

  map(result: EntityDto<number>) {
    this.model = result as TEntityEditDto;
  }

  save() {
    if (this.form.invalid) {
      this.messageService.add({
        severity: 'error',
        summary: 'The form is not valid!',
        detail: 'There are some invalid fields in this form, please correct them.',
      });
      return;
    }
    this.saving = true;

    const request =
      this.method == 'edit'
        ? this.updateObservable(this.mapFormToModel())
        : this.createObservable(this.mapFormToModel());

    request
      .pipe(
        finalize(() => {
          this.saving = false;
        })
      )
      .subscribe(x => {
        this.dialogRef.close(x);
        this.messageService.add({
          severity: 'success',
          summary: 'Success!',
          detail: 'Entry ' + x.id + ' ' + this.method == 'edit' ? 'updated' : 'created',
        });
      });
  }

  protected mapFormToModel() {
    return this.form.value;
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

  addReactiveValidator(conditionalControl: string, validatedControl: string) {
    this.form
      .get(conditionalControl)
      .valueChanges.subscribe(v => this.form.get(validatedControl).updateValueAndValidity());
  }

  abstract getSourceObservable(): any;
  abstract updateObservable(form: any): any;
  abstract createObservable(form: any): any;
  abstract buildForm();
}
