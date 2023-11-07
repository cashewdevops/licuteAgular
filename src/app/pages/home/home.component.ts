import { Component, OnInit } from '@angular/core';
import { LicuteService } from 'src/app/licute.service';
import { DataHome } from 'src/app/shared/DataHome.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [LicuteService]
})
export class HomeComponent implements OnInit {

  public pgPrincipal: DataHome

  public loading:boolean = true
  

  constructor(private licute: LicuteService){
    
  }
  
  hiddenLoading():void{
    this.loading = false
  }
  
  ngOnInit(): void{
    this.licute.getHomePage()
    .then((homepageLicute:DataHome) => {

      
      
      if(homepageLicute != undefined){
        this.hiddenLoading()
        console.log(homepageLicute)
      }

      this.pgPrincipal = homepageLicute
    })
  }

  

}
