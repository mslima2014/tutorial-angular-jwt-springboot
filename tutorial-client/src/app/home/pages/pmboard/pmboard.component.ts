import { Component, OnInit } from '@angular/core';
import { TestApiService } from 'src/app/_services/test-api.service';

@Component({
  selector: 'app-pmboard',
  templateUrl: './pmboard.component.html',
  styleUrls: ['./pmboard.component.css']
})
export class PmboardComponent implements OnInit {

  board: string;
  errorMessage: string;

  constructor(private testAPI: TestApiService) { }

  ngOnInit() {
    this.testAPI.getPMBoard().subscribe(
      data => {
        this.board = data;
      },
      error => {
        this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
      }
    );
  }

}
