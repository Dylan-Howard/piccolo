import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamInfo = [
    {
      name:'Tamara Robledo',
      title:'Insert Title Here',
      number:'2707819163',
      publicNumber:'(270) 781-9163',
      email:'tamara@piccoloins.com'
    },
    {
      name:'You Han',
      title:'Insert Title Here',
      number:'2707810499',
      publicNumber:'(270) 781-0499',
      email:'you@piccoloins.com'
    },
    {
      name:'Kirsten Wilson',
      title:'Insert Title Here',
      number:'2707812672',
      publicNumber:'(270) 781-2672',
      email:'Kirsten@piccoloins.com'
    },
    {
      name:'Darko Grgic',
      title:'Insert Title Here',
      number:'2707816046',
      publicNumber:'(270) 781-6046',
      email:'Darko@piccoloins.com'
    },
    {
      name:'Krisin Lobos',
      title:'Insert Title Here',
      number:'2707816021',
      publicNumber:'(270) 781-6021',
      email:'Krisin@piccoloins.com'
    },
    {
      name:'Colby Cobb',
      title:'Insert Title Here',
      number:'2707813384',
      publicNumber:'(270) 781-3384',
      email:'Colby@piccoloins.com'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
