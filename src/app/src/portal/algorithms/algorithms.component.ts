import { Component, OnInit } from '@angular/core';
import { Algorithm as Algorithm } from 'src/app/models/algorithm';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-algorithms',
  templateUrl: './algorithms.component.html',
  styleUrls: ['./algorithms.component.less']
})
export class AlgorithmsComponent implements OnInit {

  algorithms : Algorithm[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get<Algorithm[]>(environment.GET_ALGORITHMS_URL).subscribe(data => {
      console.log(data)
      this.algorithms = data
    })
  }

}
