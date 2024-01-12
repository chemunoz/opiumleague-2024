import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpinnerService } from '@services/spinner/spinner.service';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.scss',
})
export class SpinnerComponent {
  public isLoading$ = this.spinnerService.isLoading$;

  constructor(private readonly spinnerService: SpinnerService) {}
}
