import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Algo } from './algo';
import { ALGOS } from './ml-algos';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class AlgoService {

  constructor(private messageService: MessageService) { }

  getAlgos(): Observable<Algo[]> {
    // TODO: send the message _after_ fetching the algos
    this.messageService.add('AlgoService: fetched algos');
    return of(ALGOS);
  }
}