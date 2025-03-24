import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@Component({
  selector: 'app-form',
  standalone:true,
  imports: [FormsModule,RouterModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  @Output() formData = new EventEmitter< {
    firstName:string,
    email:string,
    phoneNo:string
  }>();

  firstName!:"";
  email!:"";
  phoneNo!:"";
  
  onSubmit(){
    this.validation();
  }
  validation(){
    if(this.firstName && this.email && this.phoneNo !==undefined){
      console.log(this.firstName );
      console.log(this.email );
      console.log(this.phoneNo );
    }
  }
}
