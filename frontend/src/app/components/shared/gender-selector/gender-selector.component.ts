import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.sass']
})
export class GenderSelectorComponent implements OnInit {
  @Input() todos: number;
  @Input() masculino: number
  @Input() feminino: number
  constructor() { }
  genero: string
  ngOnInit(): void {
  }
  onChange(){
  }
}
