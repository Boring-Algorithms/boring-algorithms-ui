import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TestExecution } from 'src/app/models/test.execution';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-test-executions',
  templateUrl: './test-executions.component.html',
  styleUrls: ['./test-executions.component.less']
})
export class TestExecutionsComponent implements OnInit {

  testExecutions : TestExecution[] = [];

  constructor(private http : HttpClient) { }

  ngOnInit(): void {

    this.http.get<TestExecution[]>(environment.GET_TEST_EXECUTIOS_URL).subscribe(data => {
      console.log(data);
      this.testExecutions = data;
    })


  }

}
