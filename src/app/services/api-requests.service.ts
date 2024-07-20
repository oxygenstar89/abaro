import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cards, SelectedFilters, Types } from './pokedex-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestsService {

  constructor(private http: HttpClient) { }

  getCards(selectedFilters?: SelectedFilters) {
    let query = '';
    if(selectedFilters?.subtype || selectedFilters?.supertype || selectedFilters?.type) {
      const subtype = selectedFilters?.subtype && selectedFilters?.subtype !== 'none' ? 'subtypes:' + selectedFilters?.subtype : '';
      const type = selectedFilters?.type && selectedFilters?.type !== 'none' ? 'types:' + selectedFilters?.type : '';
      const supertype = selectedFilters?.supertype && selectedFilters?.supertype !== 'none' ? 'supertype:' + selectedFilters?.supertype : '';
      query = `${subtype} ${type} ${supertype}`;
    }
    return this.http
    .get<Cards>('https://api.pokemontcg.io/v2/cards', { params: {'q': query, pageSize: 100, page: 1} });
  }

  getSubtypes() {
    return this.http
    .get<Types>('https://api.pokemontcg.io/v2/subtypes');
  }

  getTypes() {
    return this.http
    .get<Types>('https://api.pokemontcg.io/v2/types');
  }

  getSupertypes() {
    return this.http
    .get<Types>('https://api.pokemontcg.io/v2/supertypes');
  }
}
