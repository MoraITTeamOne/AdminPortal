import{injectable} from"angular2/core";
import{Http} from "angular2/http";
import 'rxjs/add/operator/map';

@Injectable()

export class HTTPTestservise{
	constructor(private _http:Http){}
	
	getMethod(){return this._http.get('http://date.jsontest.com')
		.map(res=>res.json());
	}
	
	
}