import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { fadeAnimation, slideUpAnimation, zoomUpAnimation, zoomLeftAnimation, slideLeftOrRightAnimation, keyFrameAnimation } from './myanimations';
import { LoginService } from './login.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  animations: [keyFrameAnimation],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'monday';
  constructor(public loginservice:LoginService){

  }
  getState(outlet){
    return outlet.isActivated? outlet.activatedRoute.snapshot.url[0].path && outlet.activatedRouteData["linkIndex"] : "none";
  }
}
