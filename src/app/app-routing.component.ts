import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuardService } from './services/auth/auth-guard.service';
import { LoginComponent } from './pages/login/login.component';
import { RoleGuardService } from './services/auth/role-guard.service';

const appRoutes: Routes = [
	{
		path: '',
		redirectTo: '/home',
		pathMatch: 'full'
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: 'home',
		component: HomeComponent,
		canActivate: [RoleGuardService],
		data: {
			expectedRoles: ['user', 'admin']
		}
	},
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
