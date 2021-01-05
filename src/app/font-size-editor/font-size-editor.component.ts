import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-editor',
  templateUrl: './font-size-editor.component.html',
  styleUrls: ['./font-size-editor.component.scss']
})
export class FontSizeEditorComponent implements OnInit {
  fontSize = 14;
  constructor() { }
  // tslint:disable-next-line:typedef
  onChange(value: number) {
    this.fontSize = value;
  }
  ngOnInit() {
  }

}
