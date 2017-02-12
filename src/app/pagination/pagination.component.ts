import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
    selector: 'app-pagination',
    template: `
        <div class="pagination-custom clearfix">
            <a md-raised-button [disabled]="prevDisabled" class="prev"><md-icon>arrow_back</md-icon></a>
            <a md-raised-button [disabled]="nextDisabled" class="next"><md-icon>arrow_forward</md-icon></a>
        </div>
    `,
    styleUrls: ['pagination.component.css']
})

export class PaginationComponent implements OnInit, OnChanges {
    @Input() items: any = [];
    @Input() item: any = {};
    prevDisabled: boolean = true;
    nextDisabled: boolean = true;

    ngOnInit() {
       
    }

    ngOnChanges(changes: any) {
        // console.log('Хуй на!!!');
        // let length = this.items.length
        // let element = this.items.indexOf(this.item)
        // console.log('length ' + length + 'element ' + element);
        // if (element >= 1) {
        //     this.prevDisabled = false;
        // } else if (element < length - 1) {
        //     this.nextDisabled = false;
        // }
    }

     prevPage() {
     }
}