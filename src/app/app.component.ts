import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient , HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: HttpClient) { }

  title = 'front-app';

  public data=[];

  ngOnInit() {
    this.getContents();
  }

  public getContents():void {

    this.sGetContents().subscribe(c => {
      if (c != null) {
        this.data = c;
      }
    },
    error => {
      this.data =[];
			console.log("Error en Servicio : getContents " + error.status);
			console.log("Mensaje: " + error.statusText);
    });
  }

  private sGetContents(): Observable<any> {
    let headers = this.generateHeaders();
    return this.http.get("http://localhost:3000/users-db", {
      headers: headers, responseType: 'json'
    });
  }

  private generateHeaders():HttpHeaders {
    return new HttpHeaders().set('Content-Type', 'application/json');
  }

}
