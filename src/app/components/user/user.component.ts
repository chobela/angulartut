import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  days:string[];
  availabble:boolean;

  constructor() { }

  ngOnInit() {

    this.name = 'chobela';
    this.age = 30;
    this.email = 'test@gmail.com';
    this.address = {
      street:'Zesco',
      city:'Ndola',
      state:'Copperbelt'
    };
    this.hobbies = ['write code', 'watch soccer', 'watch movies'];
    this.days = ['monday', 'tuesday', 'wednesday'];
    this.availabble = false;
  }

  onClick(){

    this.name='Joshua';
    this.hobbies.push('new hobby');
  }

}

interface Address {
street: string,
city: string,
state: string
}
