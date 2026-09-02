import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [RouterOutlet], 
  templateUrl: './principal.html',
  styleUrl: './principal.css'
})

export class Principal {}
