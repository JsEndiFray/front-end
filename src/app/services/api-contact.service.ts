import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ContactIn} from "../interface/contact-Interface";
import {Observable} from "rxjs";
import {environments} from "../../environments/environment.development";


@Injectable({
  providedIn: 'root'
})
export class ApiContactService {
  private appUrl: string;
  private appContact: string;

  constructor(private http: HttpClient) {
    this.appUrl = environments.endpoint;
    this.appContact = 'contact';
  }

  sendMessage(contact: ContactIn): Observable<ContactIn> {
    return this.http.post<ContactIn>(`${this.appUrl}${this.appContact}`, contact)
  }


}
