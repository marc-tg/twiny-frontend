import { Component } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-auth-page',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './auth-page.component.html',
  styleUrl: './auth-page.component.css',
})
export class AuthPageComponent {
  loginForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [
        Validators.required      ]),
    });
  }
login() {
      console.log('Intentando iniciar sesión ');

  if (this.loginForm.valid) {
    const username = this.loginForm.get('username')?.value;
    const password = this.loginForm.get('password')?.value;
    this.authService.login(username, password).subscribe({
      next: (res) => {
        // Guardas el token
        localStorage.setItem('token', res.access_token);

        // Opcional: rediriges a la página protegida o dashboard
        this.router.navigate(['/home']);
      },
      error: (err) => {
        // Manejar error, mostrar mensaje al usuario
        alert('Credenciales incorrectas');
      }
    });
  }
}

}
