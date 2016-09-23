import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
}




// export class AppComponent {

//   content = 'app works!';

//   constructor (private http: Http) {
//     let headers = new Headers();

//     headers.append('Content-Type', 'text/html');
//     headers.append('Access-Control-Allow-Origin', '*');
//     headers.append('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     this.http.get('/', {
//       headers: headers
//     }).forEach(data => {
//         this.content = data.text();
//       });
//   }
// }
