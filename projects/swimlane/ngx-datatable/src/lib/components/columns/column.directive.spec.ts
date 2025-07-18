import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

import { ColumnChangesService } from '../../services/column-changes.service';
import { DataTableColumnDirective } from './column.directive';
import { Row } from '../../types/public.types';
import Spy = jasmine.Spy;

@Component({
  selector: 'test-fixture-component',
  template: `
    <ngx-datatable-column id="t1"></ngx-datatable-column>
    <ngx-datatable-column id="t2" [name]="columnName">
      <ng-template></ng-template>
      <ng-template></ng-template>
    </ngx-datatable-column>
  `,
  imports: [DataTableColumnDirective],
  providers: [ColumnChangesService] // usually provided by the table.component
})
class TestFixtureComponent {
  columnName?: string;
}

describe('DataTableColumnDirective', () => {
  let fixture: ComponentFixture<TestFixtureComponent>;
  let component: TestFixtureComponent;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(TestFixtureComponent);
    component = fixture.componentInstance;
  }));

  describe('fixture', () => {
    let directive: DataTableColumnDirective<Row>;

    beforeEach(() => {
      directive = fixture.debugElement
        .query(By.directive(DataTableColumnDirective))
        .injector.get(DataTableColumnDirective);
    });

    it('should have a component instance', () => {
      expect(component).toBeTruthy();
    });

    it('should have at least one DataTableColumnDirective directive', () => {
      expect(directive).toBeTruthy();
    });
  });

  describe('directive #1', () => {
    let directive: DataTableColumnDirective<Row>;

    beforeEach(() => {
      directive = fixture.debugElement.query(By.css('#t1')).injector.get(DataTableColumnDirective);
    });

    it('should have undefined inputs by default', () => {
      fixture.detectChanges();
      expect(directive.name).toBeUndefined();
      expect(directive.prop).toBeUndefined();
      expect(directive.frozenRight).toBeUndefined();
      expect(directive.frozenLeft).toBeUndefined();
      expect(directive.flexGrow).toBeUndefined();
      expect(directive.resizeable).toBeUndefined();
      expect(directive.comparator).toBeUndefined();
      expect(directive.pipe).toBeUndefined();
      expect(directive.sortable).toBeUndefined();
      expect(directive.draggable).toBeUndefined();
      expect(directive.canAutoResize).toBeUndefined();
      expect(directive.minWidth).toBeUndefined();
      expect(directive.width).toBeUndefined();
      expect(directive.maxWidth).toBeUndefined();
      expect(directive.treeLevelIndent).toBeUndefined();
    });
  });

  describe('directive #2', () => {
    let columnInputChange: Spy<() => void>;

    beforeEach(() => {
      columnInputChange = spyOn(ColumnChangesService.prototype, 'onInputChange');
    });
    it('should not notify of changes if its the first change', () => {
      component.columnName = 'Column A';
      fixture.detectChanges();

      expect(columnInputChange).not.toHaveBeenCalled();
    });

    it('notifies of subsequent changes', () => {
      component.columnName = 'Column A';
      fixture.detectChanges();

      expect(columnInputChange).not.toHaveBeenCalled();

      component.columnName = 'Column B';
      fixture.detectChanges();

      expect(columnInputChange).toHaveBeenCalled();
    });
  });
});
