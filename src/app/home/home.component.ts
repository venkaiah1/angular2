import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  newImage: string;
  title: string;
  homeTitle: string;
  data = [{ name: "jaya", lastName: "chandra" }];
  myName: string;
  constructor() {}

  ngOnInit() {
    console.log('Home');
    this.homeTitle = 'Home Titles'
    this.title = "Welcome To Angular";
  }
  changeHeading() {
    this.title = "welcome to angular 6";
    this.newImage =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN";
    this.myName = "jaya chandra";
  }
}
