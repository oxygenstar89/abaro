import { Injectable } from '@angular/core';
import { ApiRequestsService } from './api-requests.service';
import { Observable, map } from 'rxjs';
import { Cards, SelectedFilters, Types } from './pokedex-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokedexDataService {

  constructor(private apiRequests: ApiRequestsService) { }

  getCards(selectedFilters?: SelectedFilters) {
    return this.apiRequests.getCards(selectedFilters).pipe(
      map(
        ({data}: Cards) => {
          return data;
        }
      )
    );
  }

  getSubtypes(): Observable<string[]> {
    return this.apiRequests.getSubtypes().pipe(
      map(
        ({data}: Types) => {
          return data;
        }
      )
    );
  }

  getTypes(): Observable<string[]> {
    return this.apiRequests.getTypes().pipe(
      map(
        ({data}: Types) => {
          return data;
        }
      )
    );
  }

  getSupertypes(): Observable<string[]> {
    return this.apiRequests.getSupertypes().pipe(
      map(
        ({data}: Types) => {
          return data;
        }
      )
    );
  }

}


