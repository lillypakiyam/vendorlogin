import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import { AddvendorPageRoutingModule } from './admin/addvendor/addvendor-routing.module';
// import { AddvendorPageModule } from './admin/addvendor/addvendor.module';
// import { AddvendorPage } from './admin/addvendor/addvendor.page';

const routes: Routes = [
  {
    path: 'admin/login',
    loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  },
  
  {
    path: 'admin/home',
    loadChildren: () => import('./admin/home/home.module').then(m => m.HomePageModule)
  },

  {
    path: 'admin/signup',
    loadChildren: () => import('./admin/signup/signup.module').then(m => m.SignupPageModule)
  },

  {
    path: 'admin/administrator-accounts',
    loadChildren: () => import('./admin/administor-accounts/administor-accounts-routing.module').then(m => m.AdministorAccountsPageRoutingModule)
  },
  // {
  //   path: 'admin/addvendor',
  //   loadChildren: () => import('./admin/addvendor/addvendor-routing.module').then(m => m.AddvendorPageRoutingModule)
  // },

  {
    path: 'admin/addvendor',
    loadChildren: () => import('./admin/addvendor/addvendor.module').then(m => m.AddvendorPageModule)
  },
  
  {
    path: 'pages/login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'pages/login',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },


  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  
  {
    path: 'pages/signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'pages/password-change',
    loadChildren: () => import('./pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  },
  // {
  //   path: 'password-change',
  //   loadChildren: () => import('./pages/password-change/password-change.module').then( m => m.PasswordChangePageModule)
  // },
  {
    path: 'pages/vendor-profile',
    loadChildren: () => import('./pages/vendor-profile/vendor-profile.module').then( m => m.VendorProfilePageModule)
  },
  {
    path: 'pages/vendor-contact-profile',
    loadChildren: () => import('./pages/vendor-contact-profile/vendor-contact-profile.module').then( m => m.VendorContactProfilePageModule)
  },
  {
    path: 'pages/bank-details',
    loadChildren: () => import('./pages/bank-details/bank-details.module').then( m => m.BankDetailsPageModule)
  },
  {
    path: 'pages/business-category',
    loadChildren: () => import('./pages/business-category/business-category.module').then( m => m.BusinessCategoryPageModule)
  },
  {
    path: 'pages/tax-details',
    loadChildren: () => import('./pages/tax-details/tax-details.module').then( m => m.TaxDetailsPageModule)
  },
  {
    path: 'pages/forget-psw',
    loadChildren: () => import('./pages/forget-psw/forget-psw.module').then( m => m.ForgetPswPageModule)
  },
  {
    path: 'pages/forget-vendor-id',
    loadChildren: () => import('./pages/forget-vendor-id/forget-vendor-id.module').then( m => m.ForgetVendorIDPageModule)
  },
  {
    path: 'pages/logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'pages/final-submission',
    loadChildren: () => import('./pages/final-submission/final-submission.module').then( m => m.FinalSubmissionPageModule)
  },
  {
    path: 'pages/tax-record',
    loadChildren: () => import('./pages/tax-record/tax-record.module').then( m => m.TaxRecordPageModule)
  },
  {
    path: 'pages/tax-form',
    loadChildren: () => import('./pages/tax-form/tax-form.module').then( m => m.TaxFormPageModule)
  },
  {
    path: 'pages/terms-conditions',
    loadChildren: () => import('./pages/terms-conditions/terms-conditions.module').then( m => m.TermsConditionsPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./admin/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./admin/home/home.module').then( m => m.HomePageModule)
  // },
  {
    path: 'admin/administor-accounts',
    loadChildren: () => import('./admin/administor-accounts/administor-accounts.module').then( m => m.AdministorAccountsPageModule)
  },
  {
    path: 'admin/signup',
    loadChildren: () => import('./admin/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'admin/invitedvendors',
    loadChildren: () => import('./admin/invitedvendors/invitedvendors.module').then( m => m.InvitedvendorsPageModule)
  },
  
  {
    path: 'admin/password',
    loadChildren: () => import('./admin/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'admin/vendor-info',
    loadChildren: () => import('./admin/vendor-info/vendor-info.module').then( m => m.VendorInfoPageModule)
  },
  {
    path: 'admin/login-info',
    loadChildren: () => import('./admin/login-info/login-info.module').then( m => m.LoginInfoPageModule)
  },
  {
    path: 'admin/top-level',
    loadChildren: () => import('./admin/top-level/top-level.module').then( m => m.TopLevelPageModule)
  },
  {
    path: 'admin/purchase-order',
    loadChildren: () => import('./admin/purchase-order/purchase-order.module').then( m => m.PurchaseOrderPageModule)
  },
  {
    path: 'admin/deleted',
    loadChildren: () => import('./admin/deleted/deleted.module').then( m => m.DeletedPageModule)
  },
  {
    path: 'admin/deletedvendor',
    loadChildren: () => import('./admin/deletedvendor/deletedvendor.module').then( m => m.DeletedvendorPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
