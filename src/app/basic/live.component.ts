import { Component, inject, ViewChild } from '@angular/core';
import {
  ColumnMode,
  DataTableColumnDirective,
  DatatableComponent
} from 'projects/swimlane/ngx-datatable/src/public-api';
import { Employee } from '../data.model';
import { DataService } from '../data.service';

@Component({
  selector: 'live-data-demo',
  template: `
    <div>
      <h3>
        Live Data Demo
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/live.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
        <small>
          <a href="javascript:void(0)" (click)="start()">Start</a> |
          <a href="javascript:void(0)" (click)="stop()">Stop</a> |
          <a href="javascript:void(0)" (click)="add()">Add</a> |
          <a href="javascript:void(0)" (click)="remove()">Remove</a>
        </small>
      </h3>
      <ngx-datatable
        #mydatatable
        class="material"
        [headerHeight]="50"
        [limit]="5"
        [columnMode]="ColumnMode.force"
        [footerHeight]="50"
        rowHeight="auto"
        [trackByProp]="'updated'"
        [rows]="rows"
      >
        <ngx-datatable-column name="Name"></ngx-datatable-column>
        <ngx-datatable-column name="Gender"></ngx-datatable-column>
        <ngx-datatable-column name="Company"></ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  imports: [DatatableComponent, DataTableColumnDirective]
})
export class LiveDataComponent {
  @ViewChild('mydatatable') mydatatable!: DatatableComponent<Employee & { updated: string }>;

  count = 50;
  rows: (Employee & { updated: string })[] = [];
  active = true;
  temp: (Employee & { updated: string })[] = [];
  cols = ['name', 'gender', 'company'] as const;

  ColumnMode = ColumnMode;

  private dataService = inject(DataService);

  constructor() {
    this.dataService.load('company.json').subscribe(data => {
      this.rows = data.map(d => ({
        ...d,
        updated: Date.now().toString()
      }));

      this.temp = [...this.rows];
    });

    this.start();
  }

  randomNum(start: number, end: number): number {
    return Math.floor(Math.random() * end) + start;
  }

  start(): void {
    if (!this.active) {
      return;
    }

    setTimeout(this.updateRandom.bind(this), 50);
  }

  stop(): void {
    this.active = false;
  }

  add() {
    this.rows.splice(0, 0, this.temp[this.count++]);
  }

  remove() {
    this.rows.splice(0, this.rows.length);
  }

  updateRandom() {
    const rowNum = this.randomNum(0, 5);
    const cellNum = this.randomNum(0, 3);
    const newRow = this.randomNum(0, 100);
    const prop = this.cols[cellNum];
    const rows = this.rows;

    if (rows.length) {
      const row = rows[rowNum];
      row[prop] = rows[newRow][prop];
      row.updated = Date.now().toString();
    }

    this.rows = [...this.rows];

    // this.cd.markForCheck();
    // this.mydatatable.update();
    this.start();
  }
}
