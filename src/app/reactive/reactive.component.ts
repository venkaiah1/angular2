import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: "app-reactive",
  templateUrl: "./reactive.component.html",
  styleUrls: ["./reactive.component.css"]
})
export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  getData = [];
  constructor(private _formBulder: FormBuilder, private router: Router) {
    this.userForm = this._formBulder.group({
      firstname: ["", [Validators.required]],
      lastname: [""],
      DOB: [],
      isAgree: [false]
    });
  }

  ngOnInit() {
    console.log("rective");
  }
  saveData(model) {
    if (this.userForm.valid && this.userForm.dirty) {
      this.getData.push(model);
      this.userForm.reset();
    } else {
      alert("please fill the requried fileds");
    }
  }
  navigateComponent() {
    this.router.navigate(["/home"]);
  }
}
