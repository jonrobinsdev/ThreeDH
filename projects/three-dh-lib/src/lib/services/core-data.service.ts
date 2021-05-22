import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ThreeDHPoint } from '../models/threedh-point.model';

@Injectable({
  providedIn: 'root'
})
export class CoreDataService {

  constructor() { }

  getPointsData() : Observable<ThreeDHPoint[]> {
    const pointsData = [{active: false, x: 531.05, y: 253.65, rank: 1, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 538.65, y: 126.35, rank: 2, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 785.65, y: 208.05, rank: 3, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 273.6, y: 452.2, rank: 4, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 497.8, y: 477.85, rank: 5, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 579.5, y: 589, rank: 6, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 76, y: 492.1, rank: 7, text: "This is some test Text. Will this new line work? ↵ probably not"},
                        {active: false, x: 323, y: 308.75, rank: 8, text: "This is some test Text. Will this new line work? ↵ probably not"}];
    return of(pointsData)
  }
}
