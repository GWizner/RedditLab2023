import { Component, Input } from '@angular/core';
import { SingleResult } from '../single-result';


@Component({
  selector: 'app-single-result',
  templateUrl: './single-result.component.html',
  styleUrls: ['./single-result.component.css']
})
export class SingleResultComponent {

  @Input() result: SingleResult = { data: { title: '', url: '', permalink: '' } };

  
}


