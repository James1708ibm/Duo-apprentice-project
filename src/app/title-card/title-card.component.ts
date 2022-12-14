import { Component, Input, OnInit} from '@angular/core';
// import {title} from 'src/app/app.component';
import { Title } from '../title';

@Component({
  selector: 'app-title-card',
  templateUrl: './title-card.component.html',
  styleUrls: ['./title-card.component.css']
})
export class TitleCardComponent implements OnInit{

  muted: boolean = false;
  muteImageSource: string = "./assets/pictures/Music_Note.jpg";
  title: Title = {
    title: 'Furniture Crusade'
  };
  

constructor() {}

  ngOnInit(): void {
  }

  soundControl(): void {
    this.muted = !this.muted;
    this.changeMuteImage();
  }

  changeMuteImage(): void {
    if(this.muteImageSource == "./assets/pictures/Music_Note.jpg"){
      this.muteImageSource = "./assets/pictures/Music_Note_Muted.jpg";
    }
    else{
      this.muteImageSource = "./assets/pictures/Music_Note.jpg";
    }
  }
}