import { Component, OnInit } from '@angular/core';
import { ClientDetailResponse } from '../../models/client-detail.interface';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-client-detail-page',
  templateUrl: './admin-client-detail-page.component.html',
  styleUrl: './admin-client-detail-page.component.css'
})
export class AdminClientDetailPageComponent implements OnInit{
  
  clienteToShow: ClientDetailResponse | undefined;
  id = '';
  
  constructor(private adminService: AdminService,  private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(p => this.id = p['id'])
    this.adminService.getClientWithOrders(this.id).subscribe(resp => {
      this.clienteToShow = resp;
    })
  }
}
