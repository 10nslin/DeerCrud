import { Component, OnInit } from '@angular/core';
import { DeerService } from '../deer.service';
import { Deer } from '../deer';
import { identifierModuleUrl } from '@angular/compiler';

@Component({
  selector: 'app-deer-list',
  templateUrl: './deer-list.component.html',
  styleUrls: ['./deer-list.component.css']
})
export class DeerListComponent implements OnInit {
  deers: Deer[];

  constructor(private _deerService: DeerService) { }

  ngOnInit() {
    this.getDeers();
  }

  getDeers() {
        // call the service to retrieve all deers
        this._deerService.getDeers().subscribe(deers => this.deers = deers as Deer[]);
  }

  deleteDeer(id: String) {
    this._deerService.deleteDeer(id).subscribe(response => {
        this.getDeers();
    });
  }

}
