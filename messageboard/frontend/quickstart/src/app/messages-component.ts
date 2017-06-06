import {Component} from '@angular/core'


@Component({
    selector: 'messages',
    template: `<div *ngFor="let message of messages">
    <md-card style="margin:8px">
    <md-card-title>{{message.text}}</md-card-title> 
    <md-card-content>{{message.owner}}</md-card-content>
    </md-card>
    </div>`
})

export class MessagesComponent {
    messages = [
        { text: 'Some Text', owner: 'Tim' }, 
        { text: 'other messages', owner: 'Jane' }
    ];

}