import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ArticlesService } from '../articles/articles.service';
@Component({
    selector: 'app-pagination',
    template: `
        <div class="pagination-custom clearfix">
            <a md-raised-button [disabled]="prevDisabled" (click)="prevPage()" class="prev"><md-icon>arrow_back</md-icon></a>
            <a md-raised-button [disabled]="nextDisabled" (click)="nextPage()" class="next"><md-icon>arrow_forward</md-icon></a>
        </div>
    `,
    styleUrls: ['pagination.component.css']
})

export class PaginationComponent implements OnInit, OnChanges {
    @Input() items: any = [];
    @Input() item: any = {};
    @Input() road: string = '';
    prevDisabled: boolean = true;
    nextDisabled: boolean = true;

    constructor(
        private articlesService: ArticlesService,
        private route: Router
    ) {}

    ngOnInit() {
       
    }

    ngOnChanges(changes: any) {
        let length = this.items.length;
        let index = this.findElementIndex();
        
        this.prevButtonState(index);
        this.nextButtonState(index);
    }

    findElementIndex () {
        return this.items.findIndex(i => i.id === this.item.id);
    }

    prevButtonState(index) {
        if (index > 0) {
            this.prevDisabled = false;
        } else {
            this.prevDisabled = true;
        }
    }

    nextButtonState(index) {
        if (index < this.items.length - 1) {
            this.nextDisabled = false;
        }else {
            this.nextDisabled = true;
        }
    }

    prevPage() {
        if(this.prevDisabled) { return }
        let index = this.findElementIndex();
        this.route.navigate([this.road, this.items[index-1].id + '-' + this.items[index-1].title.toLowerCase().split(' ').join('-')]);
    }

    nextPage() {
        if(this.nextDisabled) { return }
        let index = this.findElementIndex();
        this.route.navigate([this.road, this.items[index+1].id + '-' + this.items[index+1].title.toLowerCase().split(' ').join('-')]);
    }
}