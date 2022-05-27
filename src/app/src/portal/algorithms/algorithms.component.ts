import { Component, OnInit } from '@angular/core';
import { Challenge as Algorithm } from 'src/app/models/challenge';


@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.less']
})
export class AlgorithmsComponent implements OnInit {

  challenges : Algorithm[] = [];

  constructor() { }

  ngOnInit(): void {
    this.challenges = [
      <Algorithm>{
        id: "1",
        name: "First Challenge"
      },
      <Algorithm>{
        id: "2",
        name: "Second Challenge"
      }
    ];
  }

}
