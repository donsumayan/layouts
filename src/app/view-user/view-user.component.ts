import { ViewportScroller } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent {

  generalForm = new FormGroup({
    email: new FormControl(),
    fname: new FormControl(),
    lname: new FormControl(),
    phone: new FormControl(),
    companyName: new FormControl(),
    title: new FormControl(),
  });

  securityForm = new FormGroup({
    role: new FormControl('Transaction Manager'),
    setSSO: new FormControl(false),
    ssoIdentity: new FormControl(),
  })

  scrollElementId = 'general';

  constructor(private scroller: ViewportScroller) {
    this.scroller.setOffset([0, 184])
    this.generalForm.disable();
    this.securityForm.disable();
  }


  scrollTo(elementId: string) {
    
  }

  saveGeneralFormChanges() {
    console.log(this.generalForm.value)
  }

  saveSecurityFormChanges() {
    console.log(this.generalForm.value)
  }
}
