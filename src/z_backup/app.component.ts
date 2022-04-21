import { Component, OnDestroy, OnInit } from '@angular/core';
import Worker from 'web-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'vadashboard';

  worker!: Worker;

  ngOnInit(): void {
    this.createWorker();
    setTimeout(() => {
      this.worker.postMessage({ from: 'main', val: 'hello' });
    }, 1000);
  }

  createWorker() {
    const url = new URL('../assets/scripts/server.js', import.meta.url);
    this.worker = new Worker(url);
    this.worker.addEventListener('message', (e) => {
      console.log(e);
    });
  }

  ngOnDestroy(): void {
    this.worker.terminate();
  }
}
