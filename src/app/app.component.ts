import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  text: string;

  results: any[];

  search(event) {
      // this.mylookupservice.getResults(event.query).then(data => {
          this.results = ["data1","data2"];
      // });
  }
}
