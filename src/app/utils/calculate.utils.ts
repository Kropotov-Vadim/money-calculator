import { Product, ProductType } from "src/app/models/product.model";
import { Plan } from "src/app/models/plan.model";
import { PaymentsItem } from "src/app/models/payments.model";

export class CalculateUtils {
  private _product: Product;
  private _plan: Plan;
  constructor(product: Product, plan: Plan) {
    this._product = product;
    this._plan = plan;
  }

  get paymentsCount(): number {
    return this._product.type == ProductType.PDL ? 1 : this._plan.days / 14;
  }

  get paymentSum(): number {
    return this._product.type == ProductType.PDL
      ? this._plan.sum + (this._plan.sum * (this._plan.days * this._product.rate))
      : (this._plan.sum + (this._plan.sum * (this._plan.days * this._product.rate))) / (this._plan.days / 14);
  }

  get lastPayment(): number {
    const date = new Date(this._plan.now);
    return date.setDate(date.getDate() + this._plan.days);
  }

  private get fullPaymentSum(): number {
    return this._plan.sum + (this._plan.sum * (this._plan.days * this._product.rate))
  }

  get paymentsList(): PaymentsItem[] {
    return this._product.type == ProductType.PDL
      ? [{payDate: this.lastPayment, paySum: this.paymentSum, residualSAmount: 0}]
      : Array(this.paymentsCount).fill('').map((_, id) => {
        const date = new Date(this._plan.now + (((id + 1) * 14) * 24 * 60 * 60 * 1000));
        return <PaymentsItem>{
          payDate: date.getTime(),
          paySum: this.paymentSum,
          residualSAmount: this.fullPaymentSum - ((id + 1) * this.paymentSum)
        }
      });
  }

  set product(product: Product) {
    this._product = product;
  }

  set plan(plan: Plan) {
    this._plan = plan;
  }
}
