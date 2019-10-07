import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambio-luz',
  templateUrl: './cambio-luz.component.html',
  styleUrls: ['./cambio-luz.component.css']
})
export class CambioLuzComponent implements OnInit {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }
  
  constructor() { }

  ngOnInit() {
  }

}
