import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'restaurant-app';
  url: string = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874';
  items: any;
  stringJson: any;

  constructor(private http: HttpClient) {
    /* this.http.get(this.url).subscribe((data) => {
      this.items = data;
      console.log(this.items.meals[0].strMeal);
    }); */

    this.http
      .get(this.url)
      .pipe(
        map((responseData) => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      )
      .subscribe((data) => {
        console.log(data);
        this.items = data[0][0].strMeal;
        /* console.log(this.items[0][0].strMeal); */
      });
  }
}
