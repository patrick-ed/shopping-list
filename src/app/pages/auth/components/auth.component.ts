import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-auth',
  imports: [CommonModule, GoogleSigninButtonModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent implements OnInit {
  currentUser = signal<SocialUser | null>(null);

  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.currentUser.set(user);
    });
  }

  signOut(): void {
    this.authService.signOut();
  }
}