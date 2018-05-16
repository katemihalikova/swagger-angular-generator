/* tslint:disable:max-line-length */
/**
 * Test Swagger
 * v1
 * example.com/swagger
 */

import {Component, OnInit} from '@angular/core';
import {CareerService} from '../../../controllers/Career';
import {PositionsFormService} from './positions.service';

@Component({
  selector: 'positions',
  templateUrl: './positions.component.html',
})

export class PositionsComponent implements OnInit {
  constructor(
    public positionsFormService: PositionsFormService,
    private careerService: CareerService,
  ) {}

  ngOnInit() {
  }

  career() {
    this.careerService.positions(this.positionsFormService.form.value);
  }

}
