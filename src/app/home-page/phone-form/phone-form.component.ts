import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-phone-form',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './phone-form.component.html',
  styleUrl: './phone-form.component.scss'
})
export class PhoneFormComponent {
  showMsg: boolean | undefined;
  constructor(private httpService:HttpService){

  }
  form = new FormGroup({
    phoneNumber: new FormControl('',
      [Validators.pattern('^[0-9]{10}$'), Validators.required])
  });

  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    if(this.form.valid) {
      this.httpService.saveData(this.form.value).subscribe((res)=>{
        this.showMsg = true;
       setTimeout(() => {
        this.showMsg = false;
       }, 1000);
      })
    }
  }
  get number() {
    return this.form.get('phoneNumber')!;
  }

}
