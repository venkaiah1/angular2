import { Component, OnInit } from "@angular/core";
import { Header } from "./header.model";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  title: string;
  newImage: string;
  data = [{ name: "venky", lastName: "p" }];
  myName: string;
  listOfUsers = [];
  myModel: Header = new Header();
  constructor() {}
  ngOnInit() {
    console.log('header');
    this.title = "welcome to home";
  }
  changeHeading() {
    this.title = "welcome to home1";
    this.newImage;
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYXVTbxmHQuOogxDeNx7U6z7neHX4kOQPZEBLG5nzQZoMMhkFN";
    this.myName = "venkaiah";
  }
  saveData() {
    this.listOfUsers.push(this.myModel);
    console.log(this.listOfUsers);
  }
}
