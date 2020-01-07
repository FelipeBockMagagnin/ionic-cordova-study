import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/service/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss'],
})
export class GamesComponent implements OnInit {

  games : any = [];

  constructor(public gameService: GamesService) { }

  ngOnInit() {    
    this.gameService.getGames().subscribe(data =>{
      this.games = data['results'];
      console.log(data);
    })
  }

}
