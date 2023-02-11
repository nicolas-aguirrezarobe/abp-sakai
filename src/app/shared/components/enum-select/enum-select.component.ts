import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'app-enum-select',
    templateUrl: 'enum-select.component.html',
    styleUrls: ['enum-select.component.scss'],
    providers: [
        {
          provide: NG_VALUE_ACCESSOR,
          useExisting: EnumSelectComponent,
          multi:true
        }
      ]
})
export class EnumSelectComponent implements ControlValueAccessor {
    @Input() items: [] | any;
    selected: any;

    onChange = (event) => {console.log(event) };
    onTouched = (event) => {console.log(event) };
    disabled = false;

    writeValue(obj: any): void {
        // if(obj)
            this.selected = obj;
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

    change(event){
        this.onChange(event);
    }
}
