import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-mongo-db',
  templateUrl: './mongo-db.component.html',
  styleUrls: ['./mongo-db.component.css'],
  providers: [HttpClient]
})
export class MongoDBComponent implements OnInit {
  private id: json[

  ];



  constructor(private http: HttpClient) {

  }

  async ngOnInit() {
    try {
      const resData: any = await this.http.get('http://localhost:3000/').toPromise();
      console.log('res >> ', resData)
      if (resData.statusCode == 200) {
        console.log('success')
      } else {
        console.log('not success')
      }
    } catch (error) {
      console.log('error >> ', error)

    }
  }



}


interface json {
  id: string;
  fname: string;
  lname: string;
}