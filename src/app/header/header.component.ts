import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { AuthModalComponent } from '../shared/auth-modal/auth-modal.component';
import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() side: any;
  dialogRef: MdDialogRef<any>;

  constructor(
      public dialog: MdDialog,
      public viewContainerRef: ViewContainerRef) { }

  open(key) {
    let config = new MdDialogConfig();
    config.viewContainerRef = this.viewContainerRef;

    this.dialogRef = this.dialog.open(AuthModalComponent, config);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }

  ngOnInit() {
  }

}
