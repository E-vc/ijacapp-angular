import { Component, OnInit, Input } from '@angular/core';
import { NavRoute } from 'src/app/config/navRoutes.routes';
import { NavigationService } from '../../../services/navigation/navigation.service';

@Component({
  selector: 'app-nav-menu-item',
  templateUrl: './nav-menu-item.component.html',
  styleUrls: ['./nav-menu-item.component.scss']
})
export class NavMenuItemComponent implements OnInit {

  @Input() navigationItem: NavRoute = {} as NavRoute;
  constructor(private navigationService: NavigationService) { }

  ngOnInit() {
  }

  public isSelected() {
    return (
        this.navigationService.getSelectedNavigationItem() &&
        this.navigationItem.path ===
          this.navigationService.getSelectedNavigationItem().path
    );
  }

}
