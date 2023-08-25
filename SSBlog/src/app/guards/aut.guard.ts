import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


export const autGuard: CanActivateFn = (route, state) => {
  const router: Router = inject(Router);

  if(sessionStorage.getItem('auth')=='true'){
    return true;
  }
  return router.createUrlTree(['/login']);
};


