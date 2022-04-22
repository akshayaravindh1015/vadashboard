import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-cust-ng-if',
  templateUrl: './test-cust-ng-if.component.html',
  styleUrls: ['./test-cust-ng-if.component.css'],
})
export class TestCustNgIfComponent implements OnInit {
  show = true;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => (this.show = !this.show), 5000);
  }
}
