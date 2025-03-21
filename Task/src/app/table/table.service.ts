import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data {  
    "login" :  string,
    "id" :  number,
    "node_id" :  string,
    "avatar_url" : string,
    "gravatar_id" :  string,
    "url" :  string,
    "html_url" : string,
    "followers_url" : string,
    "following_url" : string,
    "gists_url" : string,
    "starred_url" : string,
    "subscriptions_url" : string,
    "organizations_url" : string,
    "repos_url" : string,
    "events_url" : string,
    "received_events_url" : string,
    "type" : string,
    "user_view_type" : string,
    "site_admin" :  boolean,
}


@Injectable({
  providedIn: 'root'
})
export class TableService {
  apiUrl ="https://api.github.com/users"
  
  constructor(private http: HttpClient) { }

  getAllData():Observable<Data[]>{
   return this.http.get<Data[]>(this.apiUrl)
  }
}
