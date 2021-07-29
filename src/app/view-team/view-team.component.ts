import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-view-team',
  templateUrl: './view-team.component.html',
  styleUrls: ['./view-team.component.css']
})
export class ViewTeamComponent {

  scrollElementId = 'details';
  detailsForm = new FormGroup({})

  constructor() {
  }


  scrollTo(element: HTMLDivElement | HTMLSpanElement) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
    this.scrollElementId = element.id;
  }

  saveDetailsForm() {
    console.log(this.detailsForm.value)
  }

}
