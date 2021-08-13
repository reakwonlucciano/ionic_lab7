import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leinstercountries',
  templateUrl: './leinstercountries.page.html',
  styleUrls: ['./leinstercountries.page.scss'],
})
export class LeinstercountriesPage implements OnInit {
  countries: string[] = ["Carlow", "Dublin", "Kildare",
  "Kilkenny", "Laois", "Longford", "Louth", "Meath",
  "Offaly", "Westmeath", "Wexford", "Wicklow"];
  constructor() { }

  ngOnInit() {
  }

}
