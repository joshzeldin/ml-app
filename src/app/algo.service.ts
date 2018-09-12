import { Injectable } from '@angular/core';

import { Observable, of, Subject} from 'rxjs';
import { Algo } from './algo';
import { MessageService } from './message.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AlgoService {

  algoId = new Subject<any>();

  constructor(
    private messageService: MessageService,
    private location: Location
  ) { }

}
