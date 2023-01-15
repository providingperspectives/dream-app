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
  serverCreated = false;
  servers = ['TestServer' , 'TestServer 2'];
  constructor()
    { setTimeout(()=>{ this.allowNewServer = true; }, 2000);
  }
ngOnInit(){

}

OnCreateServer(){
  this.serverCreated = true;
  this.servers.push(this.serverName);
  this.serverCreationStatus ='Server was Created! Name is ' + this.serverName;
}

OnUpdateServerName(event:Event){
  this.serverName =(<HTMLInputElement>event.target).value;
}
}
