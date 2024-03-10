import { Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { ViewAllBookComponent } from './page/view-all-book/view-all-book.component';
import { Component } from '@angular/core';
import { RegisterComponent } from './page/register/register.component';
import { TmplAstBoundDeferredTrigger } from '@angular/compiler';
import { AddBorrowerComponent } from './page/add-borrower/add-borrower.component';
import { BorrowersComponent } from './page/borrowers/borrowers.component';
import { LendComponent } from './page/lend/lend.component';
import { HomeComponent } from './page/home/home.component';

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
    },
    {
        path : "add-borrower",
        component : AddBorrowerComponent
    },
    {
        path : "borrowers",
        component : BorrowersComponent
    },
    {
        path : "lend",
        component : LendComponent
    },
    {
        path : "home",
        component : HomeComponent
    }
];
