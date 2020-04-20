import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hu-tombola';

  listanum: Array<number>=[];
  ultimonum: string="...";

  generanum(){
    var controllo=false;

    while(controllo==false){
      var numero= Math.round(Math.random()*99+1);
      controllo=true;

      for (var i=0; i<this.listanum.length; i++){
        if (numero==this.listanum[i]){
          controllo=false;
        }

      }

      if(controllo){
        this.listanum.push(numero);
        console.log(numero);
        var numuscito=document.getElementById("numcasuale");
        numuscito.innerHTML=String(numero);
        this.ultimonum=String(numero);

        if (this.listanum.length==100){
          var bottone=document.getElementById("bottone");
          bottone.setAttribute("disabled","disabled") //il primo seleziona l'attributo, il secondo setta l'attributo
          alert("Sono finiti i numeri");
          return false;

        }
      }
    }

    return false;

  }
}
