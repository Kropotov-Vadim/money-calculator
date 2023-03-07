import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component, EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { ProductPreview, ProductType } from "src/app/models/product.model";
import { Plan } from "src/app/models/plan.model";
import { CalculateUtils } from "src/app/utils/calculate.utils";

@Component({
  selector: 'app-product-calculator',
  templateUrl: './product-calculator.component.html',
  styleUrls: ['./product-calculator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductCalculatorComponent implements OnChanges {
  @Input() product!: ProductPreview;
  @Output() planChange = new EventEmitter<Plan>();

  constructor(private cd: ChangeDetectorRef) {
  }

  type = ProductType;

  plan: Plan = {
    sum: 0,
    days: 0,
    now: Date.now()
  };

  calculate!: CalculateUtils;

  ngOnChanges(changes: SimpleChanges) {
    const product = changes['product'];

    if (product.currentValue.id != product.previousValue?.id) {
      this._initData();
      this.cd.markForCheck();
    }
  }

  private _initData(): void {
    this.plan.sum = this.product.summrange.minsumm;
    this.plan.days = this.product.mindays;

    this.calculate = new CalculateUtils(this.product, this.plan);
  }

  change(): void {
    this.planChange.emit(this.plan);
    this.calculate.plan = this.plan;
  }
}
