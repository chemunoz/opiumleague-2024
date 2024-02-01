import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Player } from '@interfaces/player';
import { DataService } from '@services/data/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public readonly title = 'XII OPIUM INFICAN VIAJES';
  public players$ = new Observable<Player[]>();

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.players$ = this.dataService.getData();
  }
}
