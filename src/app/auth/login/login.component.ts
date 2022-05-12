import { Component, OnInit } from '@angular/core';
import {
  Auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from '@angular/fire/auth';
import { WindowService } from 'src/app/services/window/window.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  windowRef: any;
  phoneNumber?: string;
  verificationCode?: string;

  user: any;
  constructor(private win: WindowService, private fireauth: Auth) {}

  ngOnInit(): void {
    this.windowRef = this.win.windowRef;
    this.windowRef.recaptchaVerifier = new RecaptchaVerifier(
      'recaptcha-container',
      {
        size: 'invisible',
        callback: (response: any) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      this.windowRef
    );

    this.windowRef.recaptchaVerifier.render();
  }

  getOtp() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    signInWithPhoneNumber(
      this.fireauth,
      `+91${this.phoneNumber!}`,
      appVerifier
    ).then((result) => {
      console.log(result);
    });
  }
}
