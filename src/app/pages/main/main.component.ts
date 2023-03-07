import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from "src/app/services/data/data.service";
import { Subscription } from "rxjs";
import { ProductPreview } from "src/app/models/product.model";
import { Plan } from "src/app/models/plan.model";
import { PaymentsItem } from "src/app/models/payments.model";
import { CalculateUtils } from "src/app/utils/calculate.utils";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainComponent implements OnInit, OnDestroy{

  constructor(
    private dataService: DataService,
    private cd: ChangeDetectorRef
  ) {}

  private _sub!: Subscription;
  products!: ProductPreview[];

  activeTabId: number = 0;
  private _calculate!: CalculateUtils;

  ngOnInit() {
    this._sub = this.dataService.getData$.subscribe(data => {
      this.products = data;
      this.activeTabId = data[0]?.id ?? 0;
      this._calculate =  new CalculateUtils(
        this.activeProduct,
        {
          sum: this.activeProduct.summrange.minsumm,
          days: this.activeProduct.mindays,
          now: Date.now()
        }
      );
      this.cd.markForCheck();
    });
  }

  ngOnDestroy() {
    this._sub?.unsubscribe();
  }

  get activeProduct(): ProductPreview {
    return this.products.find(product => product.id == this.activeTabId)!
  }

  changeActiveTab(id: number) {
    if (this.activeTabId == id) return;
    this.activeTabId = id;
    this._calculate.product = this.activeProduct;
    this._calculate.plan = {
      sum: this.activeProduct.summrange.minsumm,
      days: this.activeProduct.mindays,
      now: Date.now()
    };
    this.cd.markForCheck();
  }

  planChange(plan: Plan) {
    this._calculate.plan = plan;
    this.cd.markForCheck()
  }

  get paymentList(): PaymentsItem[] {
    return this._calculate.paymentsList ?? [];
  }
}
