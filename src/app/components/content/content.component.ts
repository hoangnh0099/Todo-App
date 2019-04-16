import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  data = [
    {content: 'Go to school'},
    {content: 'Go to work'},
    {content: 'Go to home'},
  ];

  constructor() { }

  ngOnInit() {
  }

  removeItems() {
    alert("Item removed");
  }

}
