import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MatPaginator, MatSnackBar } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserRolesService } from '../../../services/userRoles.service';

import { userRoles } from '../departments/models/userRoles';



const DATA: any[] = [
  { position: 1, name: 'sdd', weight: 1.0079, symbol: 'H', foo: 'bar' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' }
];

@Component({
  selector: 'app-roles-permissions-details',
  templateUrl: './roles-permissions-details.component.html',
  styleUrls: ['./roles-permissions-details.component.scss']
})
export class RolesPermissionsDetailsComponent implements OnInit {

  //userRoles: userRoles[] = [];
  //dataSource: MatTableDataSource<userRoles> = new MatTableDataSource(this.userRoles);
  adminRole: any;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  columns: Array<any>
  displayedColumns: Array<any>
  dataSource: any
  roleUsers: Array<any>
  permissions:Array<any>
  activeTabIndex = 0;


  constructor(private router: Router, private userRolesService: UserRolesService, private _snackBar: MatSnackBar) {

    if (this.router.getCurrentNavigation().extras.state) {
      this.adminRole = this.router.getCurrentNavigation().extras.state;
    }
  }


  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    let roleDetails$:Observable<any[]>;
    let permissionDetails$:Observable<any[]>;
    if (this.adminRole.adminRoleTypeId === 1) { /// portal admin
      roleDetails$ = this.userRolesService.getAdminRoleUsers(this.adminRole);
    } else if (this.adminRole.adminRoleTypeId === 2) {
      roleDetails$ = this.userRolesService.getAdminRoleUsers(this.adminRole);
      permissionDetails$ = this.userRolesService.getAdminRolePermissions(this.adminRole);
    } else if (this.adminRole.adminRoleTypeId === 3) {
      roleDetails$ = this.userRolesService.getAdminRoleUsers(this.adminRole);
      permissionDetails$ = this.userRolesService.getAdminRolePermissions(this.adminRole);
    } else if (this.adminRole.adminRoleTypeId === 4) {
      roleDetails$ = this.userRolesService.getAdminRoleUsers(this.adminRole);
      permissionDetails$ = this.userRolesService.getAdminRolePermissions(this.adminRole);
    }
    roleDetails$.subscribe(res => {
      this.roleUsers = res;
      this.buildTable();
    })
    permissionDetails$.subscribe(res => {
      const groupBy = (items, key) => items.reduce(
        (result, item) => ({
          ...result,
          [item[key]]: [
            ...(result[item[key]] || []),
            item,
          ],
        }), 
        {},
      );
      
      let parentgroup = groupBy(res, 'parentCategoryName')
      let items = [];
      Object.keys(parentgroup).forEach(key => {
        items.push({title: key, childern: parentgroup[key]})
      })
      items.forEach((v,i) => {
        let group = groupBy(v.childern, 'categoryName' )
        let subitems = [];
        Object.keys(group).forEach(key => {
          if(key != v.title){
           subitems.push({title: key, childern: group[key]})          
          }
        })
        items[i].childern = subitems; 
      });

      this.permissions = items;
    })
  }


  buildTable(): void {
    const columns = this.roleUsers
      .reduce((columns, row) => {
        return [...columns, ...Object.keys(row)]
      }, [])
      .reduce((columns, column) => {
        return columns.includes(column)
          ? columns
          : [...columns, column]
      }, [])
    // Describe the columns for <mat-table>.
    this.columns = columns.map(column => {
      return {
        columnDef: column,
        header: column,
        cell: (element: any) => `${element[column] ? element[column] : ``}`
      }
    })
    this.displayedColumns = this.columns.map(c => c.columnDef);
    // Set the dataSource for <mat-table>.
    this.dataSource = this.roleUsers
  }

}
