import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@bakesaled/moose-watch';
import { LayoutModel } from '@bakesaled/moose-watch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public layoutModel: LayoutModel;
  title = 'app';

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.loadFromFileSystem(
      new LayoutModel('5c3d0d14-f5d1-4061-92d8-9df65486ee57', 'starter-layout'), './assets/')
      .subscribe((result) => {
        localStorage.setItem(result.id, JSON.stringify(result));
      this.layoutModel = result;
    });
  }
}
