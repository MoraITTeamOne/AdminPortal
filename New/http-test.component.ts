//our root app component
import {Component} from 'angular2/core'


@Component({
  selector: 'http-test',
  templateUrl: 'src/app.html',
  providers:[HTTPTestService]
})
export class HTTPTestComponent {
  getData:string;
  constructor(private _httpService:HTTPTestService){}
  
  onTestGet(){
	  this._httpService.getCurrentTime()
		.subscribe(
			data=> this.getData=JSON.stringify(data),
			error=> alert(error),
			()=> console.log("finished")
		);
	  
  }
  
}