import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'vadashboard';

  ngOnInit(): void {}

  onPraseTableData(tableData: any) {
    console.log(tableData);
  }

  onPraseJSONData(jsonData: any) {
    console.log(jsonData);
  }
}
