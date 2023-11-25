import { Component, OnInit } from '@angular/core';
import { ClientCardResponse } from '../../models/client-card.interface';
import { AccountService } from '../../services/account.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin-clients-page',
  templateUrl: './admin-clients-page.component.html',
  styleUrl: './admin-clients-page.component.css'
})
export class AdminClientsPageComponent implements OnInit{
  listClient: ClientCardResponse[] | undefined;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getListClient().subscribe(resp => {
      this.listClient = resp;
    })
  }
  

}
