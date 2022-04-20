import { Component, OnInit } from '@angular/core';

declare var parseSomething: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'vadashboard';

  ngOnInit(): void {
    console.log(parseSomething(JSON.stringify({ a: true })));
  }
}
