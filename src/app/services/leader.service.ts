import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dishes';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  constructor() { }


  getLeaders(): Leader[] {
    return LEADERS;
  }

  getLeader(id: number): Leader {
    // @ts-ignore
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }
  getFeaturedLeader(): Leader {
    return LEADERS.filter((leader) => leader.featured)[0];
  }
}
