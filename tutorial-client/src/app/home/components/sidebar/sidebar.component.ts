import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
  }

  hasRole(roleName: string) {
    return this.token.hasRole(roleName);
  }

}
