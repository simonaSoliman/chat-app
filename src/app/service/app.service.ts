import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ChatService {
  constructor(private http: HttpClient) {}

  //get contacts for current user
   getContacts() {
        return this.http.get('http://localhost:3000/list_all_contacts');
    }

  //get history for a single chat between two contacts
   getHistory(user_id) {
    debugger;
   		var body={'user_id':user_id}
        return this.http.get('http://localhost:3000/chat/'+user_id);
    }
  //send message
   sendMessage(message) {
        let body = JSON.stringify(message);
        return this.http.post('http://localhost:3000/send/', body, httpOptions);
    }
  //send uploaded file or image to save it in api
  postFile(fileToUpload: File): Observable<object> {
    const formData: FormData = new FormData();

    formData.append('fileKey', fileToUpload, fileToUpload.name);
    return this.http.post('http://localhost:3000/upload/', {formData: formData, fileToUpload:fileToUpload, file_name:fileToUpload.name}, httpOptions);
    
  }
  
}