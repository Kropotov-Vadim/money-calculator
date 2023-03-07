import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from "src/app/models/product.model";
import { PaymentsItem } from "src/app/models/payments.model";

@Component({
  selector: 'app-prodcut-table',
  templateUrl: './prodcut-table.component.html',
  styleUrls: ['./prodcut-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProdcutTableComponent {
  @Input() paymentsList!: PaymentsItem[];

  displayedColumns: string[] = ['payDate', 'paySum', 'residualSAmount'];
}
