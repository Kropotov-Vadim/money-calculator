import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { JsonModel } from "src/app/models/json.model";
import { map, Observable } from "rxjs";
import { ProductPreview } from "src/app/models/product.model";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  private _dataUrl: string = 'https://raw.githubusercontent.com/imhuman/test/master/ed.json';

  get getData$(): Observable<ProductPreview[]> {
    return this.http.get<JsonModel[]>(this._dataUrl)
      .pipe(map(data => {
        return [
          ...data.map(iData => {
            return [
              ...iData.products.map(product => {
                return <ProductPreview>{
                  ...product,
                  summrange: {
                    minsumm: iData.minsumm,
                    maxsumm: iData.maxsumm,
                    stepsumm: iData.stepsumm
                  }
                };
              })
            ];
          })
        ].flat()
      }))
  }
}
