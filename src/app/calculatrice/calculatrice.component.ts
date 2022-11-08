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
    [7, 8, 9, '*'],
    [4, 5, 6, '-'],
    [1, 2, 3, '+'],
    ['+/-', 0, ',', '='],
  ];

  operateur = '';
  resultat = 0;

  constructor() {}

  ngOnInit() {}

  boutonPresse(val: any) {
    if (typeof val === 'number') {
      this.input += val;
    } else {
      if (val === '+' || val === '-' || val === '*' || val === '/') {
        this.operateur = val;
        this.resultat = Number.parseFloat(this.input);
        this.input = '';
      }
      if (val === '=') {
        if (this.operateur === '+') {
          this.resultat += Number.parseFloat(this.input);
          this.input = this.resultat+"";
          console.log(' +++ resultat=' + this.resultat);
          console.log('input =' + this.input);
        }
      }
    }
  }
}
