// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs/internal/Observable';
// import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';import { PaginatedResult } from '../models/pagination';
// import { map, of } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class MembersService {
//   // baseUrl = environment.apiUrl;
//   // products: Products[] | any = [];
//   // paginatedResult: PaginatedResult<Products[]> = new PaginatedResult<Products[]>();
// constructor(private http: HttpClient) { }

// getMembers(page?: number, itemsPerPage?: number): Observable<PaginatedResult<Products[]>> {

//   let params = new HttpParams();

//   if (page != null && itemsPerPage != null) {
//     params = params.append('pageNumber', page);
//     params = params.append('pageSize', itemsPerPage);
//   }
//   return this.http.get<Products[]>('http://localhost:4200/products',
//     {
//       observe: 'response',
//       params
//     }).pipe(
//       map((response: HttpResponse<Products[]>) => {
//         this.paginatedResult.result = response.body as Products[];
//         if (response.headers.get('Pagination') !== null) {
//           this.paginatedResult.pagination = JSON.parse(response.headers.get('Pagination') || '');
//         }
//         return this.paginatedResult;
//       })
//     );
// }


// getMember(username: string): Observable<Products> {
//   // const product = this.products.find(x => x.productName === username);
//   // if (product) {
//   //   return of(product);
//   // }
//   return this.http.get<Products>(`/products/product-detail`);
// }

// getProductDetails(id:any){
//   return this.http.get(`/products/${id}`);
// }
// }

