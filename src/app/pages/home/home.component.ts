import { Component, OnInit } from '@angular/core';
import { LicuteService } from 'src/app/licute.service';
import { Catalogo } from 'src/app/shared/Catalogo.model';
import { environment } from 'src/environments/environment.development';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LicuteService]
})
export class HomeComponent implements OnInit {

  public catalogos: Catalogo[]
  public baseUrl:string = environment.API

  public loading:boolean = true  

  constructor(private licute: LicuteService,){
    
  }
  
  hiddenLoading():void{
    this.loading = false
  }
  
  ngOnInit(){

    this.licute.getCatalogo()
    .then((catalogo:Catalogo[]) => {

      if(catalogo != undefined) this.hiddenLoading()

        console.log(catalogo)

        this.catalogos = catalogo
        
    })
  }

 

}
