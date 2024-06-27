import { ValidatorFn,AbstractControl,ValidationErrors  } from '@angular/forms';

export class CustomValidator {
    static integerValidator():ValidatorFn {
        return (control: AbstractControl):ValidationErrors | null =>{
            const isInteger = (control.value.toString() === parseInt(control.value, 10).toString());
            return isInteger ? null : {integerCheck: {value: control.value}};
           
        }
    }
}