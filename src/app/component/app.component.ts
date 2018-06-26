import { Component } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import { ChatService } from '../service/app.service';
import { ContactModel } from '../view_model/contact_model';
import { MessageModel } from '../view_model/message_model';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
// const io = require('socket.io-client');
// // or with import syntax
import * as socketIo from 'socket.io-client';


@Component({
  selector: 'app-root',
  templateUrl: '../template/app.component.html'
})
export class AppComponent {

  title = 'app';
  Contacts: any;
  list_of_messages: MessageModel[];
  chat_history: any;
  current_contact: ContactModel= new ContactModel();
  user_id: string;
  current_message: MessageModel = new MessageModel();
  message: string;
  fileToUpload: File = null;
  


  constructor(
  	private chat_service:ChatService
  	){}
  ngOnInit() {
    //user Id dummy data for testing
  	this.user_id ="5b1f7aa507eaef167c51ac94";

    //call function get contacts to get all user contacts
    this.getContacts();

    //useing socket io for real time message but I have problem with it and I will solve it
    // const socket = socketIo('http://localhost:3000')
    // socket.on('connection', (data)=> console.log(data))
  }

  // get all user contacts
  getContacts() {
   this.chat_service.getContacts().subscribe(
      data => { this.Contacts = data;},
      err => console.error(err),
      () => console.log('')
    );
  }

  //featured function will be added to add favourite contacts 
  add_favourite(event:any){}

  //select the contact that the user wants to chat with and get all history messages
  open_chat(contant){
    this.current_contact = contant;
    this.chat_service.getHistory(contant._id).subscribe(
      data => { this.chat_history = data;},
      err => console.error(err),
      () => console.log('')
    );
  }

  //send message to the selcted contact 
  send_message(){
    this.message =this.current_message.message;
    if(this.current_contact.id 
      && this.current_message.message != null 
      && this.current_message.message != ""){
      debugger;
      this.current_message.receiver = this.current_contact.id;
      this.current_message.sender = this.user_id;
      //send message to the curent_contact
      this.chat_service.sendMessage(this.current_message).subscribe(
        data => { //this.current_message = data
          console.log('message from api'+data);},
        err => console.error(err),
        () => console.log('')
      );

    }else{
      console.log('error')
    }

  }
  //handel ancor clicking to click on the file input
  file_clicked(target){
    document.getElementById("file_upload").click();
  }

  //get file input in variable
  handleFileInput(files: FileList) {
      this.fileToUpload = files.item(0);
      this.uploadFileToActivity();
  }
  //call upload method from the service to upload it to the api
  uploadFileToActivity() {
    this.chat_service.postFile(this.fileToUpload).
    subscribe(data => {
      // file is uploaded
      }, error => {
        console.log(error);
      });
  }
}
