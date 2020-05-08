import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProfGuard implements CanActivate {
  constructor(public router: Router, public auth: AuthServiceService  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
    // let name = 'joshua'
    // if(name == "prof"){
    //   return true
    // }else{
    //   console.log("THIS IS NOT PROF")
    //   this.router.navigate(['/ppppp'])

    // }
    this.auth.checkLogin().subscribe(data => {
      if(data.success == true){
        return true
      }else{
        this.router.navigate(['/home'])
      }
    })
    return 
  }
  
}
