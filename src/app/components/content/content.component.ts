import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  newItem = '';
  isShow = false;

  data = [
    {id: 1, content: 'Go to school'},
    {id: 2, content: 'Go to work'},
    {id: 3, content: 'Go to home'},
  ];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.data.unshift({
      id: this.data.length + 1,
      content: this.newItem
    });
    this.newItem = '';
  }

  removeItems(id:number) {
    const index = this.data.findIndex(item => item.id === id);
    this.data.splice(index, 1);
  }

}
