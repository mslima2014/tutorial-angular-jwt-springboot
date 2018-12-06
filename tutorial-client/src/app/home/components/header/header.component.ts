import { Component, OnInit } from '@angular/core';

import { TokenStorageService } from '../../../_services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  info: any;

  constructor(private token: TokenStorageService) { }

  ngOnInit() {
    this.info = {
      username: this.token.getUsername(),
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }
}
