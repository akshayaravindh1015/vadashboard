import { Component, EventEmitter, OnInit, Output } from '@angular/core';
declare var PDFJS: any;
declare var pdf_table_extractor: any;

@Component({
  selector: 'pdf-converter',
  templateUrl: './pdf-converter.component.html',
  // styleUrls: ['./pdf-converter.component.css'],
})
export class PdfConverterComponent implements OnInit {
  constructor() {}

  @Output() onPraseTableData = new EventEmitter();
  @Output() onPraseJSONData = new EventEmitter();

  ngOnInit(): void {}
  handleFile(event: any) {
    var files = event.target.files;
    var f = files[0];

    var reader = new FileReader();
    var name = f.name;
    reader.onload = (e: any) => {
      var data = e.target.result;
      this.parse_content(data); //btoa(arr));
    };
    reader.readAsArrayBuffer(f);
  }

  result: any = {};
  htmlResult: string = '';
  tableResult: any[] = [];
  mergeTable: boolean = false;
  mergeRmFrstLine: boolean = false;

  parse_content(content: any) {
    PDFJS.workerSrc = '../../../../../assets/scripts/pdf-worker.js';
    PDFJS.cMapUrl = 'https://mozilla.github.io/pdf.js/web/cmaps/';
    PDFJS.cMapPacked = true;

    PDFJS.getDocument(content)
      .then(pdf_table_extractor)
      .then((result: any) => {
        // JSON output
        this.result = result;
        this.onPraseJSONData.emit(this.result);
        // HTML output
        this.htmlResult = '';

        let all_tables: any = [],
          page_tables;
        while ((page_tables = result.pageTables.shift())) {
          if (!this.mergeTable && !this.mergeRmFrstLine) {
            this.htmlResult = `<h3>Page ${page_tables.page}</h3>`;
          }

          if (this.mergeRmFrstLine && page_tables.page > 1) {
            all_tables = all_tables.concat(page_tables.tables.slice(1));
          } else {
            all_tables = all_tables.concat(page_tables.tables);
          }
          var tables = page_tables.tables;
          var merge_alias = page_tables.merge_alias;
          var merges = page_tables.merges;

          for (var r = 0; r < tables.length; r++) {
            if (this.mergeRmFrstLine && page_tables.page != 1 && r == 0) {
              continue;
            }
            let tr_dom: any = [];
            for (var c = 0; c < tables[r].length; c++) {
              let r_c = [r, c].join('-');
              if (merge_alias[r_c]) {
                continue;
              }

              let td_dom = '';
              // if (merges[r_c]) {
              //   if (merges[r_c].width > 1) {
              //     td_dom.attr('colspan', merges[r_c].width);
              //   }
              //   if (merges[r_c].height > 1) {
              //     td_dom.attr('rowspan', merges[r_c].height);
              //   }
              // }
              td_dom = tables[r][c];
              tr_dom.push(td_dom);
            }
            this.tableResult.push(tr_dom);
          }
        }
        this.onPraseTableData.emit(this.tableResult);
      });
  }
}
