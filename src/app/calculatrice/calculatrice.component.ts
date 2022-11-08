import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculatrice',
  templateUrl: './calculatrice.component.html',
  styleUrls: ['./calculatrice.component.css'],
})
export class CalculatriceComponent implements OnInit {
  input = '';
  tab = [
    ['%', 'CE', 'C', 'EFF'],
    ['1/x', 'X²', 'RAC', '/'],
    [7, 8, 9, 'X'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, ',', '='],
  ];
  constructor() {}

  ngOnInit() {}

  boutonPresse(val: any) {
    console.log(typeof val);
    if (typeof val === 'number') {
      this.input += val;
    }
  }
}
