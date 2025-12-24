import { AbstractControl,ValidationErrors } from "@angular/forms";

export function passwordMather(control:AbstractControl):ValidationErrors|null{
    let password = control.get('password')?.value;
    let confirmPassword = control.get('confirmPassword')?.value;

    if(!password || !confirmPassword){
        return null;
    }

    return password !== confirmPassword ? { passwordMismatch : true } : null;
}