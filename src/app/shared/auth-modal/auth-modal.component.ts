import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

import { Cridentials } from './auth';


@Component({
  moduleId: module.id,
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css']
})
export class AuthModalComponent implements OnInit {
  cridentials: Cridentials = new Cridentials();
  constructor(
    public dialogRef: MdDialogRef<any>
  ) { }

  ngOnInit() {
  }

}
