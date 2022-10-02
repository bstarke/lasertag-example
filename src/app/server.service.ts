import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl: string = "http://localhost:8080"

  constructor(private http: HttpClient) {
  }

  createPlayer(postData: { codeName: string }) {
    this.http
      .post(this.baseUrl + "/players", postData)
      .subscribe();
  }

  getAllPlayers() {
    this.http
      .get(this.baseUrl + "/players")
      .subscribe(players => {
        console.log(players)
      });
  }
}
