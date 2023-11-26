import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  links = [
    {
      path: '/',
      label: 'César',
    },
    {
      path: '/polybe',
      label: 'Polybe',
    },
    {
      path: '/affine',
      label: 'Affine',
    },
  ];

  active: number = 4;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
        this.checkActiveTab(event.url);
      });

    this.checkActiveTab(this.router.url);
  }

  checkActiveTab(url: string) {
    if (url === '/' || url === '/decryptage-cesar') {
      this.active = 1;
    } if (url === '/polybe' || url === '/decryptage-polybe') {
      this.active = 2;
    } if (url === '/affine' || url === '/decryptage-affine') {
      this.active = 3;
    }
  }
}
