import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterQuery } from '../models/character';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StarTrekService {

  constructor(private http: HttpClient) { }

  loadCharacters(page: number): Observable<CharacterQuery> {
    let url = `http://stapi.co/api/v1/rest/character/search/?pageNumber=${page}`;
    return this.http.get(url).pipe(
      map(data => {
        return {
          hasNext: !data['page'].lastPage,
          characters: data['characters']
        }
      })
    )
  }
}