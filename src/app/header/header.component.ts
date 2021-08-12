import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { TokenStorageService } from '../services/auth/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;

  constructor(private authService: AuthService,
              private tokenStorage: TokenStorageService
              ) { }

  ngOnInit() {
    if(this.authService.loggedIn()){
      this.isAuth = true;
    }
    else{
      this.isAuth = false;
    }
  }

  onSignOut() {
    this.tokenStorage.signOut();
    window.location.reload();
  }
}
