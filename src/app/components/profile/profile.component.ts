import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private router : Router
  ) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(!token){
      this.router.navigate(['/login']);
    }
  }
  getName(){
    let value = JSON.parse(localStorage.getItem('user'));
    let name = value.data.firstName;
    return name;
  }
  getEthAddress(){
    let value = JSON.parse(localStorage.getItem('user'));
    let EthAddress = value.data.EthAddress;
    return EthAddress;
  }
  getaccountExpiresOn(){
    let value = JSON.parse(localStorage.getItem('user'));
    let accountExpiresOn = value.data.accountExpiresOn;
    return accountExpiresOn;
  }
  getaccountType(){
    let value = JSON.parse(localStorage.getItem('user'));
    let accountType = value.data.accountType;
    return accountType;
  }
}