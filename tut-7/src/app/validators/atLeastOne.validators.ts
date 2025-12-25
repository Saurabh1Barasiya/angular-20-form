import { AbstractControl, FormArray, ValidationErrors } from "@angular/forms";

export function atleastOneMethodRequired(control:AbstractControl):ValidationErrors|null{
    let skkilsArray = control as FormArray;

    console.log(skkilsArray) // ye array hoga.
    let hasValue = skkilsArray.controls.some((ctrl)=>ctrl.value?.trim());
    return hasValue ? null : {skillRequired: true}
}