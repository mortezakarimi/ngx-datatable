import { Component, inject, ViewChild } from '@angular/core';
import { GroupedEmployee } from '../data.model';
import {
  ColumnMode,
  DataTableColumnCellDirective,
  DataTableColumnDirective,
  DatatableComponent,
  DatatableGroupHeaderDirective,
  DatatableGroupHeaderTemplateDirective,
  Group,
  GroupToggleEvents,
  SelectionType
} from 'projects/swimlane/ngx-datatable/src/public-api';
import { DataService } from '../data.service';

@Component({
  selector: 'row-grouping-demo',
  template: `
    <div>
      <h3>
        Row Grouping
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/basic/row-grouping.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        #myTable
        class="material expandable"
        [rows]="rows"
        [groupRowsBy]="'age'"
        [columnMode]="ColumnMode.force"
        [scrollbarH]="true"
        [headerHeight]="50"
        [footerHeight]="50"
        [rowHeight]="40"
        [limit]="4"
        [groupExpansionDefault]="true"
        [selectionType]="SelectionType.checkbox"
      >
        <!-- Group Header Template -->
        <ngx-datatable-group-header
          [rowHeight]="34"
          [checkboxable]="true"
          #myGroupHeader
          (toggle)="onDetailToggle($event)"
        >
          <ng-template
            let-group="group"
            let-expanded="expanded"
            ngx-datatable-group-header-template
          >
            <div style="padding-left:5px;height: 100%; display:flex;align-items: center;">
              <a
                href="#"
                [class.datatable-icon-right]="!expanded"
                [class.datatable-icon-down]="expanded"
                title="Expand/Collapse Group"
                (click)="toggleExpandGroup(group)"
              >
                <b>Age: {{ group ? group.value[0].age : '' }}</b>
              </a>
            </div>
          </ng-template>
        </ngx-datatable-group-header>

        <!-- Row Column Template -->
        <ngx-datatable-column
          name="Exp. Pay."
          prop=""
          [headerCheckboxable]="true"
          [checkboxable]="true"
          editable="true"
          [frozenLeft]="true"
          [sortable]="false"
        >
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-row="row"
            let-group="group"
          >
            <label for="ep1{{ rowIndex }}" class="datatable-checkbox">
              <input
                type="checkbox"
                id="ep1{{ rowIndex }}"
                name="{{ rowIndex }}"
                value="0"
                class="expectedpayment"
                [attr.aria-label]="'ex pay1' + rowIndex"
                (change)="checkGroup($event, row, rowIndex, group!)"
                [checked]="row.exppayyes === 1"
              />
            </label>
            <label for="ep2{{ rowIndex }}" class="datatable-checkbox">
              <input
                type="checkbox"
                id="ep2{{ rowIndex }}"
                name="{{ rowIndex }}"
                value="1"
                class="expectedpayment2"
                [attr.aria-label]="'ex pay2' + rowIndex"
                (change)="checkGroup($event, row, rowIndex, group!)"
                [checked]="row.exppayno === 1"
              />
            </label>
            <label for="ep3{{ rowIndex }}" class="datatable-checkbox">
              <input
                type="checkbox"
                id="ep3{{ rowIndex }}"
                name="{{ rowIndex }}"
                value="2"
                class="expectedpayment3"
                [attr.aria-label]="'ex pay3' + rowIndex"
                (change)="checkGroup($event, row, rowIndex, group!)"
                [checked]="row.exppaypending === 1"
              />
            </label>
          </ng-template>
        </ngx-datatable-column>

        <ngx-datatable-column
          name="Source"
          prop="source"
          editable="false"
          [frozenLeft]="true"
        ></ngx-datatable-column>
        <ngx-datatable-column name="Name" prop="name" editable="true"></ngx-datatable-column>
        <ngx-datatable-column name="Gender" prop="gender"></ngx-datatable-column>
        <ngx-datatable-column name="Age" prop="age"></ngx-datatable-column>
        <ngx-datatable-column name="Comment" prop="comment">
          <ng-template
            ngx-datatable-cell-template
            let-rowIndex="rowIndex"
            let-value="value"
            let-row="row"
            let-group="group"
            let-rowHeight="rowHeight"
          >
            <input
              (blur)="updateValue($event, 'comment', rowIndex)"
              type="text"
              name="comment"
              [value]="value"
            />
          </ng-template>
        </ngx-datatable-column>
      </ngx-datatable>
    </div>
  `,
  imports: [
    DatatableComponent,
    DatatableGroupHeaderDirective,
    DatatableGroupHeaderTemplateDirective,
    DataTableColumnDirective,
    DataTableColumnCellDirective
  ]
})
export class RowGroupingComponent {
  @ViewChild('myTable') table!: DatatableComponent<GroupedEmployee>;

  editing: Record<string, boolean> = {};
  rows: GroupedEmployee[] = [];

  ColumnMode = ColumnMode;
  SelectionType = SelectionType;

  private dataService = inject(DataService);

  constructor() {
    this.dataService.load('forRowGrouping.json').subscribe(data => {
      this.rows = data;
    });
  }

  checkGroup(event: Event, row: GroupedEmployee, rowIndex: number, group: GroupedEmployee[]) {
    let groupStatus = 'Pending';
    let expectedPaymentDealtWith = true;
    const target = event.target as HTMLInputElement;

    row.exppayyes = 0;
    row.exppayno = 0;
    row.exppaypending = 0;

    if (target.checked) {
      if (target.value === '0') {
        // expected payment yes selected
        row.exppayyes = 1;
      } else if (target.value === '1') {
        // expected payment yes selected
        row.exppayno = 1;
      } else if (target.value === '2') {
        // expected payment yes selected
        row.exppaypending = 1;
      }
    }

    if (group.length === 2) {
      // There are only 2 lines in a group
      if (
        ['Calculated', 'Funder'].indexOf(group[0].source!) > -1 &&
        ['Calculated', 'Funder'].indexOf(group[1].source!) > -1
      ) {
        // Sources are funder and calculated
        if (group[0].startdate === group[1].startdate && group[0].enddate === group[1].enddate) {
          // Start dates and end dates match
          for (let index = 0; index < group.length; index++) {
            if (group[index].source !== row.source) {
              if (target.value === '0') {
                // expected payment yes selected
                group[index].exppayyes = 0;
                group[index].exppaypending = 0;
                group[index].exppayno = 1;
              }
            }

            if (
              group[index].exppayyes === 0 &&
              group[index].exppayno === 0 &&
              group[index].exppaypending === 0
            ) {
              expectedPaymentDealtWith = false;
            }
            console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
          }
        }
      }
    } else {
      for (let index = 0; index < group.length; index++) {
        if (
          group[index].exppayyes === 0 &&
          group[index].exppayno === 0 &&
          group[index].exppaypending === 0
        ) {
          expectedPaymentDealtWith = false;
        }
        console.log('expectedPaymentDealtWith', expectedPaymentDealtWith);
      }
    }

    // check if there is a pending selected payment or a row that does not have any expected payment selected
    if (
      group.filter(rowFilter => rowFilter.exppaypending === 1).length === 0 &&
      group.filter(
        rowFilter =>
          rowFilter.exppaypending === 0 && rowFilter.exppayyes === 0 && rowFilter.exppayno === 0
      ).length === 0
    ) {
      console.log('expected payment dealt with');

      // check if can set the group status
      const numberOfExpPayYes = group.filter(rowFilter => rowFilter.exppayyes === 1).length;
      const numberOfSourceFunder = group.filter(
        rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Funder'
      ).length;
      const numberOfSourceCalculated = group.filter(
        rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Calculated'
      ).length;
      const numberOfSourceManual = group.filter(
        rowFilter => rowFilter.exppayyes === 1 && rowFilter.source === 'Manual'
      ).length;

      console.log('numberOfExpPayYes', numberOfExpPayYes);
      console.log('numberOfSourceFunder', numberOfSourceFunder);
      console.log('numberOfSourceCalculated', numberOfSourceCalculated);
      console.log('numberOfSourceManual', numberOfSourceManual);

      if (numberOfExpPayYes > 0) {
        if (numberOfExpPayYes === numberOfSourceFunder) {
          groupStatus = 'Funder Selected';
        } else if (numberOfExpPayYes === numberOfSourceCalculated) {
          groupStatus = 'Calculated Selected';
        } else if (numberOfExpPayYes === numberOfSourceManual) {
          groupStatus = 'Manual Selected';
        } else {
          groupStatus = 'Hybrid Selected';
        }
      }
    }

    group[0].groupstatus = groupStatus;
  }

  updateValue(event: Event, cell: 'comment', rowIndex: number) {
    this.editing[rowIndex + '-' + cell] = false;
    this.rows[rowIndex][cell] = (event.target as HTMLInputElement).value;
    this.rows = [...this.rows];
  }

  toggleExpandGroup(group: Group<GroupedEmployee>) {
    console.log('Toggled Expand Group!', group);
    this.table.groupHeader!.toggleExpandGroup(group);
  }

  onDetailToggle(event: GroupToggleEvents<GroupedEmployee>) {
    console.log('Detail Toggled', event);
  }
}
