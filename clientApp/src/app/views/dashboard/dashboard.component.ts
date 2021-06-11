import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const GRAPH_ENDPOINT = 'https://graph.microsoft.com/v1.0/me';
//const GRAPH_ENDPOINT_M = 'https://graph.microsoft.com/v1.0/departments';
// const GRAPH_ENDPOINT_M = 'https://graph.microsoft.com/v1.0/users?$select=department,givenName ';
const GRAPH_ENDPOINT_M = 'https://graph.microsoft.com/v1.0/users/anudeep@powerbiaxes.onmicrosoft.com';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profile!: ProfileType;
  DCBT : Number;
  DCBH : Number;
  VRT : Number;
  EVC : Number;
  AEIS : Number;
  AMTC : Number;
  TVHW : Number;
  TVTS : Number;
 
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.getProfile();
  }

  // ngOnInit() {
  //   this.LoadValues();
  // }

  LoadValues(){
    this.DCBT = 120;
    this.DCBH = 100;
    this.VRT = 90;
    this.EVC = 65;
    this.AEIS = 23;
    this.AMTC = 45;
    this.TVHW = 90;
    this.TVTS = 29;
  }

  getProfile() {
    this.http.get(GRAPH_ENDPOINT)
      .subscribe(profile => {
        this.profile = profile;
        console.log('profile', this.profile)
      });

      this.http.get(GRAPH_ENDPOINT_M)
      .subscribe(res => {
        console.log("manager" , res);
      });
  }
}