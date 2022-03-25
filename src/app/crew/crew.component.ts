import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  constructor() { }

  ngOnInit() {
  }

  memberBeingEdited: object = null;
  add(crewMember: string, isFirstMission: boolean){
    this.crew.push({name: crewMember, firstMission: isFirstMission})
  }
  remove(memberBeingRemoved: object) {
    let index: number = this.crew.indexOf(memberBeingRemoved)
    this.crew.splice(index, 1)
  }
  edit(member: object) {
    this.memberBeingEdited = member;
  }
  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
    console.log(this.crew[0])
    }
    
}
