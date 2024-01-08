import { Component, OnInit } from '@angular/core';
import { Player } from '@interfaces/player';
import { DataService } from '@services/data.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public players: Player[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .getData()
      .pipe(tap((players) => (this.players = players)))
      .subscribe();
  }
}
