import { Component } from '@angular/core';

@Component({
  selector: 'testgen-eleven-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sideNavOpen = false;
  title = 'testgen-eleven';

  sideNavToggle(): void {
    this.sideNavOpen = !this.sideNavOpen;
  }
}
