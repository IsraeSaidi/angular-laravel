import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-trier-product',
  templateUrl: './trier-product.component.html',
  styleUrls: ['./trier-product.component.css']
})
export class TrierProductComponent implements OnInit {
  @Input()
  productBeforeSort: any;
  @Output()
  productAfterSort = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log(this.productBeforeSort);
  }
  onSubmit() {
    this.productBeforeSort.sort(function (a: any, b: any) {
      var nomA = a.name.toUpperCase(); // ignore upper and lowercase
      var nomB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nomA < nomB) {
        return -1;
      }
      if (nomA > nomB) {
        return 1;
      }

      // names must be equal
      return 0;
    }).reverse();
    this.productAfterSort.emit(this.productBeforeSort);
  }

}
