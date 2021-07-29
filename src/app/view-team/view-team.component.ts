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
  membersForm = new FormGroup({})
  removable = true;

  users = ['One fish', 'Two Fish', 'Three Fish']

  scrollTo(element: HTMLDivElement | HTMLSpanElement) {
    element.scrollIntoView({
      behavior: 'smooth'
    });
    this.scrollElementId = element.id;
  }

  saveDetailsForm() {
    this.detailsForm.disable()
  }

  saveMembersForm() {
    this.membersForm.disable()
  }

  remove(name: string) {
    this.users = this.users.filter(v => v !== name);
  }

}
