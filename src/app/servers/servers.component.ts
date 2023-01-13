import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //template: `
  //<app-server></app-server>
 // <app-server></app-server>`,
 templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreationStatus = 'No server was created!';
  serverName='Testserver';
  constructor()
    { setTimeout(()=>{ this.allowNewServer = true; }, 2000);
  }
ngOnInit(){

}

OnCreateServer(){
  this.serverCreationStatus ='Server was Created! Name is ' + this.serverName;
}

OnUpdateServerName(event:Event){
  this.serverName =(<HTMLInputElement>event.target).value;
}
}
