import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-class',
  templateUrl: './pipe-class.component.html',
  styleUrls: ['./pipe-class.component.css']
})
export class PipeClassComponent implements OnInit {

  constructor() { }

  public text = "angular pipe class";

  public today_date = new Date();

  public tr_number;
  public factor;

  public number = 14780.567;
  ngOnInit(): void {
  }

}
