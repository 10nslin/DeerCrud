import { Component, OnInit } from '@angular/core';
import { DeerService } from '../deer.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Deer } from '../deer';

@Component({
  selector: 'app-deer-show',
  templateUrl: './deer-show.component.html',
  styleUrls: ['./deer-show.component.css']
})
export class DeerShowComponent implements OnInit {
  deer: Deer;

  constructor(private _deerService: DeerService, private _aRouter: ActivatedRoute ) { }

  ngOnInit() {
    this._aRouter.params.subscribe((params: Params) => {
      console.log(params['id']);
      this._deerService.getOneDeer(params['id']).subscribe(deer => this.deer = deer as Deer);
    });
  }

}
