import { PagedResultDto } from '@abp/ng.core';
import { ConfirmationService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { DialogHelper } from 'src/app/shared/services/dialog-helper';
import * as moment from 'moment';
import * as FileSaver from 'file-saver';
import { Injectable, ViewChild } from '@angular/core';


@Injectable()
export abstract class BaseIndexComponent<T> {
  total: number;
  loading: boolean = false;
  viewMode = 'stack';
  dataKey = 'id';
  sortField = 'id';
  sortOrder = -1;
  rowsPerPageOptions = [10, 25, 50];
  rowsPerPage = 25;
  dataSource: T[];
  selected: T[];
  skeletonRows = 4;
  currentTableContext: TableContext;

  constructor(
    protected dialogService: DialogService,
    protected confirmationService: ConfirmationService
  ) {
    
  }
  
  public loadData(context: TableContext) {
    this.loading = true;
    this.saveContext(context);

    this.getSourceObservable(this.buildRequest(this.currentTableContext))
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(result => {
        this.dataSource = result.items;
        this.total = result.totalCount;
      });
  }

  public search(dt, input){
    dt.filterGlobal(input, 'contains');
  }

  public export() {
    this.loading = true;
    var request = this.buildRequest(this.currentTableContext);
    request.skipCount = 0;
    request.maxResultCount = 10000;
    this.getSourceObservable(request)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe(result => {
        this.exportExcel(result.items);
      });
  }

  protected buildRequest(context: TableContext): any {
    var request = {
      sorting: `${context.sortField} ${context.sortOrder == -1 ? 'desc' : 'asc'}`,
      skipCount: context.first,
      maxResultCount: context.rows,
      filters: this.buildFilters(context.filters),
      search: context.globalFilter,
    };
    return request;
  }

  protected buildFilters(filters: any[]): any[] {
    var result: any[] = null;
    Object.keys(filters).forEach(filterName => {
      if (filterName === 'global') {
        return;
      }
      var fieldFilters: FieldFilter[] = filters[filterName];
      fieldFilters = fieldFilters.filter(x => x.value != null);

      fieldFilters.forEach(x => {
        if (x.matchMode.toLowerCase().includes('date')) {
          x.value = moment(x.value).format('yyyy/MM/DD');
        }
      });

      if (fieldFilters.every(x => x.operator == 'or')) {
        var values: any[] = [];
        fieldFilters.forEach(filterValue => {
          values.push(filterValue.value);
        });
        if (values.length > 0) {
          var filter = `${filterName}_in_${values.join(',')}`;
          if (!result) {
            result = [];
          }
          result.push(filter);
        }
      } else {
        fieldFilters.forEach(filterValue => {
          var filter = `${filterName}_${filterValue.matchMode}_${filterValue.value}`;
          if (!result) {
            result = [];
          }
          result.push(filter);
        });
      }
    });
    return result;
  }

  openForm(id?: number) {
    var dialogConfig = DialogHelper.getDialogConfig();
    dialogConfig.header = id ? 'Edit' : 'Create';
    dialogConfig.data = this.getDialogData(id);

    const ref = this.dialogService.open(this.getFormComponent(), dialogConfig);

    ref.onClose.subscribe((result: any) => {
      if (result) {
        this.loadData(null);
      }
    });
  }
  
  openFormPopUp(id: string) {
    var dialogConfig = DialogHelper.getDialogConfig();
    dialogConfig.header = 'Detail';
    dialogConfig.data = this.getDialogData(id);

    const ref = this.dialogService.open(this.getFormComponent(), dialogConfig);

    ref.onClose.subscribe((result: any) => {
      if (result) {
        this.loadData(null);
      }
    });
  }

  delete(id: number) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this record?',
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.deleteObservable(id).subscribe(() => {
          this.loadData(null);
        });
      },
    });
  }

  private saveContext(context) {
    if (!context) context = this.currentTableContext;
    else this.currentTableContext = context;
  }

  exportExcel(data: T[]) {
    import('xlsx').then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.formatExcelExport(data));
      const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      this.saveAsExcelFile(excelBuffer, 'export');
    });
  }

  formatExcelExport(data: T[]): any {
    return data;
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE =
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE,
    });
    FileSaver.saveAs(data, fileName + new Date().getTime() + EXCEL_EXTENSION);
  }

  showSkeleton(){
    return !this.dataSource;
  }

  abstract getSourceObservable(request: any): Observable<PagedResultDto<T>>;
  abstract deleteObservable(id: number);
  abstract getFormComponent(): any;
  protected getDialogData(id: any) {
    if (id) return { id: id };
  }
}

interface TableContext {
  first: number;
  globalFilter: any;
  multiSortMeta: any;
  rows: number;
  sortField: string;
  sortOrder: number;
  filters: any[];
}

interface FieldFilter {
  matchMode: string;
  operator: string;
  value: any;
}
