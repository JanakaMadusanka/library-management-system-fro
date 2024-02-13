import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { Component } from '@angular/core';
import { RegisterComponent } from './page/register/register.component';

export const routes: Routes = [
    {
        path : "login",
        component :LoginComponent
    },
    {
        path : "view-all-book",
        component :ViewAllBookComponent
    },
    {
        path : "register",
        component : RegisterComponent
    }
];
