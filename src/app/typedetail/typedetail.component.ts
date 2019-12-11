import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ActionService} from '../../action.service';
import {Type} from '../../Type';
import {Information} from '../../Information';
import {QRCodeComponent} from 'ng2-qrcode';
@Component({
  selector: 'app-typedetail',
  templateUrl: './typedetail.component.html',
  styleUrls: ['./typedetail.component.css']
})
export class TypedetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private actionService: ActionService,
              private location: Location) { }
  type: Type;
  information: Information;
  ngOnInit(): void {
    this.type = new Type();
    const id = this.route.snapshot.paramMap.get('id');
    this.actionService.simplesearch('isbn', id).subscribe(
      (data) => {
        console.log(data);
        this.information = data;
        this.type = data.types[0];
      }
    );
  }



}
