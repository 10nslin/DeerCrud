import { Component, OnInit } from '@angular/core';
import { Deer } from '../deer';
import { DeerService } from '../deer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deer-new',
  templateUrl: './deer-new.component.html',
  styleUrls: ['./deer-new.component.css']
})
export class DeerNewComponent implements OnInit {
  deer: Deer = new Deer();

  constructor(private _deerService: DeerService, private _router: Router) { }

  ngOnInit() {
  }

  addDeer() {
    // send data to deer service
    this._deerService.addDeer(this.deer).subscribe(result => console.log(result));
    this.deer = new Deer();
    // redirect to root
    this._router.navigate(['deer']);
  }

}
