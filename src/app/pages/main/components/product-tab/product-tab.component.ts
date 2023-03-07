import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductPreview, ProductType } from "src/app/models/product.model";

@Component({
  selector: 'app-product-tab',
  templateUrl: './product-tab.component.html',
  styleUrls: ['./product-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTabComponent {
  @Input() product!: ProductPreview;
  @Input() active: boolean = false;
  @Output() select = new EventEmitter<number>();

  type = ProductType;
}
