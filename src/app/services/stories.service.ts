import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private stories:any[]=[
    {
      title: "La dama de las flores",
      text: "Aeris es débil físicamente, pero su mejor arma, el Guarda Princesa deja crecer la materia y su fuerza en magia es la mayor de los personajes utilizables en el juego, sin embargo es peligroso equiparla con mucha materia ya que no cuenta con muchos puntos de vitalidad. Su cabello es castaño claro, con el cabello crespo, su piel es blanca, sus ojos son verdes, aunque en varias ocasiones como en Kingdom Hearts, tiene los ojos de color verde agua. Viste un vestido rosa, con una chaqueta roja, botas cafés, listón en su cuello, brazaletes dorados y un pequeño moño rosa el cual amarra su cabello. Nació el 6 de Julio.",
      img: "assets/img/aerith.jpg",
      user: "Alexis",
      category:"novel"
    },
    
    {
      title: "El último caballero",
      text: "Las llamas corrompidas por el abismo corroían el ladrillos de los muros y el hueso de los guerreros",
      img: "assets/img/knight.jpg",
      user: "Alven",
      category:"short"
    },
    {
      title: "Saga",
      text: "Todo empezó con Saga, el primero de los imbéciles que yo que sé, hizo algo malo supongo",
      img: "assets/img/saga.png",
      user: "A.C. Vinland",
      category:"novel"
    }
  ];
  constructor( private http:HttpClient) {
    console.log("stories");
   }

  getStories(){
    return this.http.get('http://localhost/ariandel/ariandel/public/api/story').pipe(map(data=>{return data}));
    //return this.stories;
  }
  getStory(i:number){
    return this.stories[i];
  }       
}
