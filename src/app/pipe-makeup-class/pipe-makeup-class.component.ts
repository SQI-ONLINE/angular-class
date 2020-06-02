import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-makeup-class',
  templateUrl: './pipe-makeup-class.component.html',
  styleUrls: ['./pipe-makeup-class.component.css']
})
export class PipeMakeupClassComponent implements OnInit {

  constructor() { }

  public pipeTest = 'JOSHUA';
  public numberPipe = 769280809850.8675;
  public today = new Date();
  
  ngOnInit(): void {
  }

}
