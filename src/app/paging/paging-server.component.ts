import { Component, OnInit } from '@angular/core';
import { MockServerResultsService } from './mock-server-results-service';
import { Page } from './model/page';
import { ColumnMode, DatatableComponent } from 'projects/swimlane/ngx-datatable/src/public-api';
import { Employee } from '../data.model';

@Component({
  selector: 'server-paging-demo',
  providers: [MockServerResultsService],
  template: `
    <div>
      <h3>
        Server-side Paging
        <small>
          <a
            href="https://github.com/swimlane/ngx-datatable/blob/master/src/app/paging/paging-server.component.ts"
            target="_blank"
          >
            Source
          </a>
        </small>
      </h3>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="[{ name: 'Name' }, { name: 'Gender' }, { name: 'Company' }]"
        [columnMode]="ColumnMode.force"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [externalPaging]="true"
        [count]="page.totalElements"
        [offset]="page.pageNumber"
        [limit]="page.size"
        (page)="setPage($event.offset)"
      >
      </ngx-datatable>
    </div>
  `,
  imports: [DatatableComponent]
})
export class ServerPagingComponent implements OnInit {
  page: Page = {
    pageNumber: 0,
    size: 20,
    totalElements: 0,
    totalPages: 0
  };
  rows: Employee[] = [];

  ColumnMode = ColumnMode;

  constructor(private serverResultsService: MockServerResultsService) {}

  ngOnInit() {
    this.setPage(0);
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
  setPage(page: number) {
    this.page.pageNumber = page;
    this.serverResultsService.getResults(this.page).subscribe(pagedData => {
      this.page = pagedData.page;
      this.rows = pagedData.data;
    });
  }
}
