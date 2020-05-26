import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Navigate } from '@ngxs/router-plugin';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  menuItems = [
    {
      label: 'Add todo',
      action: () => {
        this.store.dispatch(new Navigate(['/add-todo']));
      }
    },
    {
      label: 'Todo list',
      action: () => {
        this.store.dispatch(new Navigate(['/todo-list']));
      }
    }
  ];

  constructor(private store: Store) { }

  ngOnInit() {
  }

}
