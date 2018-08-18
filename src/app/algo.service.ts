import { Injectable } from '@angular/core';

import { Observable, of, Subject } from 'rxjs';
import { Algo } from './algo';
import { ALGOS } from './ml-algos';
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

  getAlgos(): Observable<Algo[]> {
    // TODO: send the message _after_ fetching the algos
    this.messageService.add('AlgoService: fetched algos');
    return of(ALGOS);
  }

  getAlgo(id: number): Observable<Algo> {
    // TODO: send the message _after_ fetching the algo
    this.messageService.add(`AlgoService: fetched algo id=${id}`);
    return of(ALGOS.find(algo => algo.id === id));
  }

  setAlgoId(id: number) {
    this.location.go('/detail/' + id );
    this.algoId.next(id);
  }

  getAlgoId(): Subject<number> {
    return this.algoId;
  }
}
