# CHANGELOG

## HEAD (unreleased)

## 22.0.0-alpha.1

- Enhancement: Exporting isNullOrUndefined function and ColumnChangesService service to be used externally.

## 22.0.0-alpha.0

- Enhancement: Added support for Angular 20
- Breaking: Removed support for Angular 17 and earlier versions

## 21.1.0

- Fix: Prevent browser page crash when user inputs large Arrays

## 21.0.0

- Fix: Add missing package files from deployment
- Breaking: support for angular 17-19

## 20.1.0

- Chore: Support for angular 13+

## 20.0.0

- Breaking: Update to angular 12

## 19.0.0

- Breaking: Update to angular 11

## 18.0.0

- Breaking: Update to angular 10

## 17.1.0

- Feature: Add sorting: unset icon

## 17.0.0

- Chore: explicitly only support ng9

## 16.1.1

- Chore: Patch release to override 16.1.0

## 16.1.0

- Fix: [selectAllRowsOnPage] is broken. (#1809)
- Fix: Bug when using cellClass as string. (#1817)
- Fix: Docs. (#1812, #1837, #1845, #1854)
- Fix: redraw after recalculate (#1816)
- Fix: undefined row index for rows in groups (#1857)
- Chore: Add pretty-quick as a precommit hook using husky (#1841)
- Chore: Bump dependencies (#1858, #1862, #1859)

## 16.0.3

- Bug: Fix disappearing rows with vertical scrollbar, virtual scrolling & rowdetail auto height (#1799)
- Bug: Fix memory leak due to created element not cleaned up (#1792)
- Bug: do not collapse row details when row updated (#1778)

## 16.0.2

- Bug: Remove barrel files because ng-packagr doesn't work well with them

## 16.0.1

- Bug: Include styles, assets and themes in release

## 16.0.0

- Breaking: the release files are not under the `/release` folder any more. Also, paths to `themes` and `assets` have changed. If you are importing any assets or styles from the release folder, you would need to update the paths.
- Chore: Migrates the project to angular-cli, making it compatible with Ivy (#1738)
- Feature: Implements global module config via forRoot (#1688)
- Feature: Colors of material style can be modified by target application (#1651)
- Bug: Fixes Exception in scoller component destroy (#1685)
- Bug: Fixes issue 1686: column resizing issue in force columns mode (no horizontal scroll) when container get smaller (#1687)
- Docs: Updates demo pages (#1738)

## 15.0.2

- Fix: Fixes issue where footer pagination does not work when virtual scrolling is enabled (#1704)

## 15.0.1

- Fix: Fixes issue where using conditional templates would not render them (#1701)

## 15.0.0

- Breaking: Upgrade to angular 8 (#1697)
- Fix: Module not found: Error: Can't resolve '.' (#1646)
- Fix: trackByProp can't work. (#1622)

## 14.0.0

- Breaking: Upgrade to angular 7
- Fix: Fix compile error when using TemplateTypeCheck set to true (#1520)

## 13.1.0

- Feature: Added support for tree grid (#1273)
- Fix: Improve virtualization as a flag (#1297)
- Fix: Fix issue when count is undefined #838 (#1499)
- Fix: Fix usage withing prerendered SPA (#1438)

## 13.0.1

- Fix: Run scroll event listeners inside angular zone (#1375)

## 13.0.0

- Breaking: Fixes several issues related to the summary row feature #1418
- Fix: DataTableColumnDirective Input Binding Changes #1384
- Fix: angular version #1420
- Fix: issues when running npm run build --prod #1410

## 12.0.0

- Breaking: Upgraded to Angular 6 #1400
- Feat: Added reorderable input #1261
- Fix: Fixed rowHeight type in body component #1295
- Fix: Fixed row selection for bootstrap theme #1357
- Fix: Reflect minWidh & maxWidth props to body cell #1361

## 11.3.0

- Feat: Added summary row #1233
- Fix: Fixed issue wi
  th misaligned body content #1326
- Fix: Fixed Default Sort Behavior Of Table With Custom Templates #1308
- Chore: Fixed link in column api docs #1343
- Chore: Fixed typo in docs #1342

## 11.2.0

- Feat: Add resize handler for non-resizable columns #1225
- Fix: Pager Component Accessibility #1259
- Fix: Fix missing row with virtualization and scrollbarV #1235
- Fix: Fall back to view mode when select field value doesn't change #1241
- Fix: Fix virtual-paging #1229
- Fix: Fix column scaling on resize #1236
- Fix: Propagate sortDir changes to template #1243
- Fix: Add setStylesByGroup() in set column prop #1244

## 11.1.7

- Fix: Fix error w/ rows undefined on init

## 11.1.6

- Bug: Ignore rxjs/operators
- Feat: Ability to disable virtualization #1191
- Feat: Universal Support #1178

## 11.1.5

- Compat: Fix Angular 4.x Compat

## 11.1.4

- Bug: Fix column templates not updating with loops/ifs
- Bug: Fix sorting on cross browser
- Chore: Switch to lettable operators

## 11.1.3

- Bug: Angular SSR Event Undefined (#1144)

## 11.1.2

- Bug: Fix total undefined (#1140)

## 11.1.1

- Bug: Fix race case with rows

## 11.1.0

- Perf: Better performance on scrolling y and x
- Feature: Select All on Current Page (#1132)
- Bug: Don't show empty on loading (#1139)

## 11.0.4

- Bug: Fix Angular5 Aot Issue
- Bug: Fix Vendor Prefix Error

## 11.0.1, 11.0.2, 11.0.3

- Bug: Angular 5 bugs

## 11.0.0

- Chore: Upgrade to Angular5

## 10.4.0

- Feature: Ability to filter checkable rows (#1056)
- Feature: Allow sorting based on whole row (#1074)
- Bug: Fix protractor events (#1081)
- Bug: Fix misalignment on smaller screens (#1081)

## 10.3.0

- Feature: Bootstrap theme
- Bug: Fix CSS for row grouping (#1053)
- Bug: Fix group row values (#1034)
- Bug: Fix cell overflow w/ fluid height (#1030)
- Bug: Fix for column sort (#1018)
- Bug: Strip HTML for null values (#966)
- Bug: Update context in cell header (#935)
- Bug: Add bounds to offset (#978)
- Bug: Make selection apply to all rows (#974)

## 10.2.3

- Bug: Fix checkbox not being shown #956
- Bug: Fix IE displaying null #967
- Bug: Fix emptry string is row is null #951

## 10.2.2

- Bug: Recalculate limit properly #963

## 10.2.1

- Bug: Detail Row Broken

## 10.2.0

- Feature: Row Grouping

## 10.1.0

- Feature: Row Hover Event
- Bug: Columns are no longer mutated!
- Bug: Fixes for Angular v5!
- Bug: Fix expand all row detail not working #917
- Chore: Remove useless jsdoc comments

## 10.0.5

- Style: Material styles closer to spec
- Bug: Non-sortable header showing pointer cursor

## 10.0.4

- Perf: Changed everything internal to OnPush
- Perf: Fixed header cell outlet cd
- Bug: Fixed sort mutating original rows

## 10.0.3

- Perf: Better performance in cells

## 10.0.2

- Enhancement: Add `rowIndex` to row-detail template
- Bug: Add `index.css` back to build

## 10.0.1

- Bug: Fix old references to `$$index` and `$$expanded`
- Bug: Add `$$index` in cell templates as `rowIndex`
- Bug: Fix MouseEvent undefined in JIT (#893)

## 10.0.0

- BREAKING: `$$expanded` is no longer on row of detail templates, use `let-expanded` to get pop now
- Feature: Always center activated page on pager
- Bug: Remove row mutations of `$$index` and `$$expanded`
- Bug: Pagination broken on large number of rows
- Bug: Strip HTML from title tags (#892)

## 9.3.1

- Bug: More Universal Rendering Fixes (#795)
- Chore: Build optimizations from new webpack version

## 9.3.0

- Feature: Unviseral Rendering (#764)

## 9.2.0

- Enhancement: Add header context menu event
- Bug: Fix sort blowing up when undefined and adding new sort
- Bug: Fix multi-selection key with Mac

## 9.1.0

- Enhancement: Add more context to cells #720
- Enhancement: Export Pager component #735
- Bug: Header checkbox when row selection is changed #659
- Bug: When rowClass() returns a string, the class is not properly added #710
- Bug: Rename icons so don't conflict with other libs #729

## 9.0.0

- BREAKING: Fixes for external pagination fixes. Index calculation change being last page = `0 + pageSize` (#714, #138, #391)
- Feature: Server-side virtual scrolling pagination
- Demos: Deep linking of demo pages

## 8.2.1

- Bug: Fix footer styles

## 8.2.0

- Feature: Footer Templates

## 8.1.0

- Feature: Dark Theme

## 8.0.1

- Bug: Fix memory leak (#702)
- Bug: Don't add column header title attribute when custom template provided (#643)
- Bug: Only apply pointer to header text (#682)
- Bug: Fix prop field name with dots (#596)
- Bug: Virtual scroll + dynamic height in cell detail not working right (#703)
- Bug: Fix dynamic row height not working right if using server-side pagination
- Chore: Implement `noImplicitAny` (#671)

## 8.0.0

- Breaking: Removed `cssClass` from columns in favor of explicit
- Feature: Added explicit `headerClass` and `cellClass`
- Feature: Add ability to have callback for those class getters
- Bug: Fix checkbox select all not updating ui correctly

## 7.3.1

- Bug: Fix resize handle drag triggering long press
- Bug: Fix dragging trigging column sorting
- Bug: Fix column re-ordering not working on FF

## 7.3.0

- Feature: Dynamic row heights for virtual scrolling
- Bug: Do not use `document` for universal support (#668)

## 7.2.1

- Bug: Fix missing type

## 7.2.0

- Feature: Allow for dynamic Detail Row heights (#653)
- Feature: Numeric prop support via support array rows (#494)
- Perf: Optimize sort code by caching valueGetter and compareFn outside loop.
- Perf: Set ValueGetter on `TableColumn.$$valueGetter`
- Bug: Alter setColumnDefaults to work with numeric prop values.

## 7.1.1

- Perf: Fix memory leaks with templates (#464)
- Bug: Fix row detail expanded and then collapsed not showing anything until scroll

## 7.1.0

- Bug: Fix title not set on cell template (#629)
- Chore: Update to official Angular4
- Chore: Misc build dep updates

## 7.0.0

- BREAKING: Update to Angular4!
- Feature: Row classes (#571), (#348)
- Bug: Show first page after sorting (#553)
- Bug: When reordering and skipping a column, the column gets duplicated (#497), (#562), (#563)
- Chore: Upgrade misc deps and lint fixes

_NOTE: If you need support for ~Angular2, use version 6.x._

## 6.3.0

- Bug: Perform sort when sort icon is clicked (#536)
- Bug: Fix resize handle overlaped by label (#521)
- Chore: Fix relative imports for rollup (#542)
- Chore: Linting

## 6.2.1

- Bug: Revert #516 causing server-side paging issue (#543)

## 6.2.0

- Bug: Fix AoT builds with SCSS (#534)
- Bug: Fix offset incorrect when filtering (#516)
- Bug: Fix mouse press subscription cleanups (#522)
- Bug: Fix header cell wrapper empty span (#504)
- Bug: Fix selected count undefined in footer template (#537)
- Bug: Fix orderable unsubscribe listeners (#538)
- Chore: Update Angular and ZoneJS

## 6.1.2

- Bug: Fix default sort (#475)

## 6.1.1

- Bug: Fix tree-shaking issue (#511)

## 6.1.0

- Feature: Add selected count in footer (#508)
- Bug: Fix drag/drop/long-press (#506)
- Bug: Fix row widths not set correctly (#510)
- Perf: Better mouseup handling (#507)
- Chore: Bump Depedencies

## 6.0.2

- Bug: Move scss to release dir (#459)

## 6.0.1

- Bug: Fix CSS not working with AoT (#459)
- Chore: Fix ExtractText plugin causing build issue
- Chore: Upgrade Angular 2.4.5

## 6.0.0 (2017-01-25)

- BREAKING: Renamed `datatable` css class to `ngx-datatable`
- BREAKING: Embedded core css file with Angular `styleUrls`
- Enhancement: Allow sorting from inline templates (#431)
- Enhancement: Fix re-ordering columns throwing errors (#438)
- Enhancement: Add nice drag indicator to material theme
- Chore: Update Depedencies

## 5.0.0

- BREAKING: Re-worked all inputs, methods and outputs of row detail to its own container
- Enhancement: Implement Finder/Explorer shift selection behavior
- Bug: Fix reverse selection de-selecting first index in reverse
- Bug: Fix row detail not rendering

## 4.2.0

- Enhancement: Ability to add CSS Classes on Header/Column
- Bug: Fix CPU Perf on Resort (#409)
- Chore: Upgrade to Angular ^2.4.3
- Chore: Correct RxJS Imports

## 4.1.0

- Feature: Adding multi-click selection
- Bug: Use tracking fn vs inline (#388)
- Bug: Fix AoT header issue (#389)
- Bug: Fix `reorderable` not being honored (#387)
- Bug: Fix multi-select CTRL not working (#381)
- Chore: Upgrade Angular to ^2.4.1
- Docs: Multi-select

## 4.0.0

- BREAKING!!!! - Renamed project from `angular2-datatable` to `ngx-datatable`
  and updated components from `<swui-datatable>` to `<ngx-datatable>`

## 3.0.0

- BREAKING: Removed `shiftMulti` option, its not useful and creates odd scenarios
- Bug: Permanently high CPU utilization after sorting (#359)
- Bug: Fix checkbox showing in header if defined but not using checkbox select
- Bug: Fix AoT errors (#370)
- Bug: Fix build not outputing AoT files in correct directory
- Bug: Fix checkbox selection not working w/ shift key
- Chore: Upgrade Angular/Webpack

## 2.2.3

- Bug: Fix header checkbox mutating selection array

## 2.2.2

- Bug: Fix default selections and don't mutate selection arrow now

## 2.2.1

- Bug: Fix AoT by reverting TypeScript upgrade until CLI is updated

## 2.2.0

- Bug: Fix AoT private props (#352)
- Bug: Added null chk to selection getter (#340)
- Bug: multiShift not working after first page (#294)
- Chore: Update Angular to 2.3.0
- Chore: Update TypeScript to 2.1.x
- Chore: Update RxJS to 5.0.0-rc.4
- Chore: Update ZoneJS to 0.7.2
- Demo: Add templates for Webpack plugin for Google Analytics

## 2.1.3

- Bug: Fix footer not updating when all removes removed
- Bug: Fix Add/Remove items in array not updating (#255)

## 2.1.2

- Bug: Fix sizing method being debounced on view inits rather than just window resize.

## 2.1.1

- Bug: Fix memory leak with visibility observer

## 2.1.0

- Feature: Checkbox selection mode
- Enhancement: Selection mode auto added to host class for easier styling
- Style: Remove row active/select state when in cell mode of material theme
- Bug: Force fill column mode w/ scrollbarH false allowing bleed when resized
- Perf: Faster render time by adding css class via host
- Perf: Debounce window resize calcs

## 2.0.0

- BREAKING: Rename from `datatable` to `swui-datatable` (#320)
- BREAKING: Redo how row-detail/cell/header templates are described in markup (#304)
- BREAKING: Change Detection switched back to normal
- Enhancement: Row Context Menu Event `rowContextmenu` (#331)
- Bug: Set default value for selected (#314)
- Bug: Fix widths being int vs float (#309)
- Bug: Fix column resize not setting widths to the right (#308)
- Bug: Fix row object mutations (#255)
- Bug: Async Problem when using @Input (#253)
- Bug: Sort doesn't work on the first click (#254)
- Bug: Pagination "skip to last page" is not selected after click (#324)
- Bug: ngFor Not working in the datatable-row-detail-template (#274)
- Chore: Resolve all implicit `any`s (#330)
- Chore: Bump Angular to latest `2.2.4`

## 1.7.0

- Enhancement: Add RxJS Support
- Chore: Fix builds on windows

## 1.6.0

- Bug: Column headers not re-ordering (#238)
- Bug: Datatable doesn't sort data correctly when data changed (#284)
- BREAKING: `comparator` now is a normal sort function arguments of `propA, propB`.

## 1.5.1

- Bug: Custom comparator should return new array (#286)
- Bug: Init selection to empty array (#285)

## 1.5.0

- Enhancement: `externalSorting` input for simpler server-sorting usage (#281)
- Enhancement: Add `trackByProp` for change detection with mutation of row data
- Bug: Row height variable access protection (#280)
- Chore: Upgrade to Angular 2.2.0
- Demo: Inline editing updates
- Demo: Live data refresh demo
- Breaking: Remove `refresh` method per recommendation by @robwormald

## 1.4.1

- Bug: Ignore next page when already at last (#223)
- Chore: Redid Webpack Config to be clean
- Chore: TESTS! TRAVIS BUILDS! COVERAGE REPORTING!

## 1.4.0

- Enhancement: Added `refresh` API for updating table (#255)
- Bug: Fix intersection observer type errors (#268)

## 1.3.1

- Bug: Fix force column width distribution overriding new resize (#245)

## 1.3.0

- Enhancement: `selectCheck` fn to prevent selection
- Bug: Fix columns leaking event handlers
- Bug: Fix column toggling errors (#245)
- Bug: Fix AoT Metadata not creating

## 1.2.0

- Bug: Fix columns loosing templates on resize (#252)
- Bug: Fix pager not having right pages when hidden by default
- Bug: Fix expressive column width as attribute with standard column distribution
- Bug: Fix body columns not readjusting after window resize (#251)
- Enhancement: Refactor `emptyMessage` and `totalMessage` to `messages` object
- Enhancement: Huge perf improvement for tables hidden by default

## 1.1.0

- Feature: NGC Complation
- Bug: Null value in deepValueGetter (#243)
- Chore: Update Depedencies

## 1.0.0

- Feature: Cell Selection and Keyboard Navigation
- Feature: `activation` events
- Enhancement: `OnPush` all the things!
- Enhancement: Add `totalMessage` option for localization
- Enhancement: Demo Page
- Enhancement: Page Count Formatted
- Enhancement: Automatically format column `prop` when no `name` passed
- Enhancement: Add ability to pass false to `comparator` for sort handling via event
- Bug: Window resize not updating rows in virtual scrolling
- Chore: Switch to SemVer
- BREAKING: `TableOptions` has been removed and options are `Input` on component now
- BREAKING: `TableColumn` class has been removed, just pass normal objects
- BREAKING: Event names has been renamed using Angular2 standards
- BREAKING: Components have been renamed to Angular2 standards
- BREAKING: Removed `StateService`

## 0.12.0

- Bug: Return empty string on undefined deep values (#232)
- Bug: Fix force fill alog (#218)
- Enhancement: Support for other icon types (#235)
- Enhancement: Add ability to identify rows for proper selection (#154)

## 0.11.2

- Enhancement: Add ability to define css icon classes for pager / header
- Chore: Uprade to Angular 2.1.1

## 0.11.1

- Chore: Polish on new build

## 0.11.0

- Chore: New build process
- Bug: Fix detail row bug (#212)

## 0.10.1

- Bug: Fix `$$expanded` undefined with server paging (#210)

## 0.10.0

- Chore: Upgrade to Angular 2.1.0 (#202)
- Chore: Removed engine restrictions (#195)
- Bug: windows builds with node-sass (#207)
- Bug: resizing not closing correctly (#196)
- Bug: Fix height paging (#208)
- Enhancement: Improve Active CSS (#204)
- Enhancement: Add Empty Message (#194)
- Enhancement: Add deep value getter to sortRows function (#181)
- Enhancement: Sort Classes are applied to body cells (#166)
- Enhancement: AoT Compatibility (#199)
- Feature: Row Detail (#201)

## 0.9.3

- Column resize sometimes gives weird behaviour on mouse resize/click (#155)
- Fix order of setters in DataTable ngOnChanges (#179)
- Remove document event listener subscription leak in draggable & resizeable
- Fix `setScrollTop` undefined error (#182)

## 0.9.2

- Fix `name` being `undefined` introduced in 0.9.0 release

## 0.9.1

- Export component references for external consumption (#176)

## 0.9.0

- Fix accidental breaking change of renaming `HeaderCell` column property to `model`. See [commit](https://github.com/swimlane/angular2-data-table/commit/6c56b51ab918e380edb0d511730b28e66cb80afe#diff-aee46548d5e0b9f72917dd179250d4fe).
- Ensure minWidth and maxWidth values are specified saved as numbers (#167)
- Add row double click option (#168)

## 0.8.0

- Added the ability to define header templates expressively
  _Breaking Change!_ Renamed `template` to `cellTemplate` in column options

## 0.7.4

- Removed #142 in favor of style height
- Fixed issue with height + scrollbarV not sizing right
- Fix limit not applied (#133)
- Fix sort not resetting to top of page (#136)
- Added option validation

## 0.7.3

- Huge perf bumps (#149)

## 0.7.2

- Build fixes

## 0.7.1

- Removed template wrapper in favor of native template outlet

## 0.7.0

- Upgrade Angular 2.0.1 & ZoneJS
- Angular Code Style Compliance (#147)
- Fix initial load of rows jumbled (#156)
- Update row/options setting to ngOnChanges (#151)
- Fix column height not set correctly (#144)

## 0.6.1

- Virtual Scrolling Emits Paging (#130)

## 0.6.0

- Update to Angular 2.0.0!
- Fix horizontal header issue (#129)

## 0.5.1

- Fixed Multiple Tables on Same Page (#103)
- Fix TS Helpers not being included in release (#107)
- Update `onPage` API to reflect docs (#116)

## 0.5.0

- Upgrade to Angular2 RC7
