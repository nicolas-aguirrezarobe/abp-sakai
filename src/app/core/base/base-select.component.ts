import { PagedResultDto } from '@abp/ng.core';
import { Injectable, OnInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable()
export abstract class BaseSelectComponent<T> implements OnInit, ControlValueAccessor {
  items: T[];
  pageSize = 1000;
  selectedId: number;

  onChange = event => {
    console.log(event);
  };
  onTouched = event => {
    console.log(event);
  };
  disabled = false;

  ngOnInit(): void {
    this.getAll().subscribe(x => {
      this.items = x.items;
    });
  }

  writeValue(obj: number): void {
    if (obj) this.selectedId = obj;
  }
  registerOnChange(onChange: any) {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any) {
    this.onTouched = onTouched;
  }
  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  change(event) {
    this.onChange(event);
  }

  abstract getAll(): Observable<PagedResultDto<T>>;
}
