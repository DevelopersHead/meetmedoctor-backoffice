import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu/menu.service';
import { IMenuItem } from 'src/app/core/models/IMenuItem';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css']
})
export class TopNavComponent implements OnInit, AfterViewInit {

  public model: Array<IMenuItem>;
  constructor(private menuService: MenuService) { }
  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.menuService.get().pipe(take(1)).subscribe(result => {
      this.model = result;
    });
  }
}