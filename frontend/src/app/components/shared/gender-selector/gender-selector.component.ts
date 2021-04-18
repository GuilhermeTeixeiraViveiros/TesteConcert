import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: ['./gender-selector.component.sass']
})
export class GenderSelectorComponent implements OnInit {
  @Input() todos: number;
  @Input() masculino: number
  @Input() feminino: number
  @Output() genderSelctionChanged : EventEmitter<string> = new EventEmitter<string>(); 
  constructor() { }
  genero: string
  ngOnInit(): void {
  }
  onChange(){
    this.genderSelctionChanged.emit(this.genero);
  }
}
