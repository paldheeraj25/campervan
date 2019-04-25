import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };

  focus;
  focus1;
  public imageUrlArray: any[];
  constructor() { }

  ngOnInit() {

    this.imageUrlArray = [
      { url: 'https://firebasestorage.googleapis.com/v0/b/lakshmi-53afa.appspot.com/o/image1.jpg?alt=media&token=f07d70c9-e441-451b-b226-66048ea1ccc3', caption: '<h1 style="color: red;">Oh Darling, Let’s Be Adventurers.</h1>' },
      { url: 'https://firebasestorage.googleapis.com/v0/b/lakshmi-53afa.appspot.com/o/4.jpg?alt=media&token=081bc2f5-b49f-4fa9-8479-76d152235294', caption: '<h2>Explore India On Your Own Terms</h2>' },
      { url: 'https://firebasestorage.googleapis.com/v0/b/lakshmi-53afa.appspot.com/o/6.jpg?alt=media&token=4d86992b-5bd5-4321-bb65-b6d2bbe7300d', caption: '<h1>TEST CAPTION</h1>' },
      { url: 'https://firebasestorage.googleapis.com/v0/b/lakshmi-53afa.appspot.com/o/8.jpg?alt=media&token=a2e10651-1f70-413f-bf36-bfa2c8c8715c', caption: '<h1>TEST CAPTION</h1>' },
    ];
  }
}
