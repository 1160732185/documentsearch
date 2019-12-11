import { Component, OnInit } from '@angular/core';
import {ActionService} from '../../action.service';
import {Type} from '../../Type';
import {of} from 'rxjs';
import {Information} from '../../Information';

@Component({
  selector: 'app-adsearch',
  templateUrl: './adsearch.component.html',
  styleUrls: ['./adsearch.component.css']
})
export class AdsearchComponent implements OnInit {

  name: string;
  author: string;
  publisher: string;
  isbn: string;
  callno: string;
  types: Type[];
  information: Information;
  sptypes: Type[];
  publishtime: string[];
  publishtimenum: number[];
  aclicked: boolean;
  dclicked: boolean;
  tclicked: boolean;
  lclicked: boolean;
  a: string;
  d: string;
  t: string;
  l: string;

  constructor(private actionservice: ActionService) { }

  ngOnInit() {
    this.information = new Information();
    this.aclicked = false; this.lclicked = false; this.dclicked = false; this.tclicked = false;
  }

  adsearch(): void {
   this.actionservice.advancesearch(this.name, this.author, this.publisher, this.isbn, this.callno).subscribe(
     (data) => {
          this.information = data;
          this.sptypes = this.information.types;
       // tslint:disable-next-line:prefer-for-of
          for (let i = 0 ; i < this.sptypes.length; i++) {
       }
          console.log(this.sptypes);
     });
  }

  filter(type: string, content: string) {
    if (type === 't') {
      this.tclicked = true;
      this.t = content;
      this.actionservice.fmsearch(this.name, this.author, this.publisher, this.isbn, this.callno, this.a, this.d, this.l, this.t).subscribe(
        (data) => {
          this.information = data;
          this.sptypes = this.information.types;
          console.log(this.information);
        });
    }
    if (type === 'a') {
      this.aclicked = true;
      this.a = content;
      this.actionservice.fmsearch(this.name, this.author, this.publisher, this.isbn, this.callno, this.a, this.d, this.l, this.t).subscribe(
        (data) => {
          this.information = data;
          this.sptypes = this.information.types;
          console.log(this.sptypes);
        });
    }
    if (type === 'd') {
      this.dclicked = true;
      this.d = content;
      this.actionservice.fmsearch(this.name, this.author, this.publisher, this.isbn, this.callno, this.a, this.d, this.l, this.t).subscribe(
        (data) => {
          this.information = data;
          this.sptypes = this.information.types;
          console.log('iiiiii' + this.information);
        });
    }
    if (type === 'l') {
      this.lclicked = true;
      this.l = content;
      this.actionservice.fmsearch(this.name, this.author, this.publisher, this.isbn, this.callno, this.a, this.d, this.l, this.t).subscribe(
        (data) => {
          this.information = data;
          this.sptypes = this.information.types;
          console.log(this.sptypes);
        });
    }
  }
}
