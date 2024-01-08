import { Component, OnInit } from '@angular/core';
import { Player } from '@interfaces/player';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DataService } from '@services/data.service';
import { tap } from 'rxjs';

@UntilDestroy()
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
      .pipe(
        untilDestroyed(this),
        tap((players) => (this.players = players))
      )
      .subscribe();
  }
}
