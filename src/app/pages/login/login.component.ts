import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { ToastService } from '../../services/toast/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user: string;
  password: string;

  userError = false;
  passwordError = false;


  constructor(
    private authService: AuthService,
    private toastService: ToastService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login() {
    if (!this.user) {
      this.userError = true;
    }
    if (!this.password) {
      this.passwordError = true;
    }

    if (this.userError || this.passwordError) {
      return;
    }

    this.authService.authenticate(this.user, this.password)
      .then(logged => {
        if (logged) {
          this.toastService.add('Sesión iniciada correctamente');
          this.router.navigate(['']);
        } else {
          this.toastService.add('No se ha podido iniciar sesión', 'danger');
        }
      }).catch(err => {
        this.toastService.add('No se ha podido iniciar sesión', 'danger');
      });
  }

}
