import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../action.service';
import {Type} from '../../Type';
import {Information} from '../../Information';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private actionservice: ActionService) { }
  title = 'documentsearch';
  searchoption = 'name';
  searchcontent: string;
  types: Type[];
  hots: string[];
  htmlele: any;
  information: Information;
  optionchange(): void {
    this.htmlele = document.getElementById('edit-field');
    this.searchoption = this.htmlele.value;
    console.log(this.searchoption);
  }
  search(searchoption: string, searchcontent: string): void {
    console.log(this.searchoption + this.searchcontent);
    this.actionservice.simplesearch(searchoption, searchcontent).subscribe(
      (data) => {
        this.information = data;
        this.types = this.information.types;
        console.log(data);
      }
    );
  }
  ngOnInit() {
    this.actionservice.gethot().subscribe((data) => {
      this.hots = data;
      console.log(this.hots);
    });
  }

}
