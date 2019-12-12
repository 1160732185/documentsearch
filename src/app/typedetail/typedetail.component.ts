import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import {ActionService} from '../../action.service';
import {Type} from '../../Type';
import {Information} from '../../Information';
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
  comment: string;
  comments: string[];
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
    this.actionService.scomment(id).subscribe(
      (data) => {
        this.comments = data;
        console.log('评论' + this.comments);
      }
    );
  }
  addcomment() {
    console.log(this.comment);
    this.actionService.addcomment(this.comment, this.type.isbn).subscribe((data)=>{
      console.log(data);
    });
  }
}
