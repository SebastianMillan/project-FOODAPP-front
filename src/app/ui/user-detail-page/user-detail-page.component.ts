import { Component, OnInit } from '@angular/core';
import { ClientDetailResponse } from '../../models/client-detail.interface';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { LoggedUserDetailResponse } from '../../models/logged-user-detail.interface';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrl: './user-detail-page.component.css'
})
export class UserDetailPageComponent implements OnInit{

  loggedUser: ClientDetailResponse | undefined;
  
  constructor(private adminService: AdminService,  private router: Router){}

  ngOnInit(): void {
    this.adminService.getLoggedUser().subscribe(resp => {
      this.loggedUser = resp;
    })
  }
  navigateToEdit() {
    this.router.navigateByUrl("/profile/edit");
  }
}
