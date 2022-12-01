import { Component, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoading:boolean=false;
  public selected_address?:string;

  constructor(private zone:NgZone) {
    
    
  }
  ngOnInit(): void {
    //this.locate();
  }

  
  /* public locate():void{
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      let geocoder = new google.maps.Geocoder();
      let latlng = new google.maps.LatLng(coords.latitude, coords.longitude);
  
  
      geocoder.geocode({location:latlng}, (results, status) => {
        if (status == google.maps.GeocoderStatus.OK) {
          if (results[0] != null) {
            var user_city = results[0].address_components.filter(ac=>~ac.types.indexOf('locality'))[0].long_name

            this.zone.run(()=>{
              this.selected_address=user_city;
              this.isLoading=false;
            });
            
            

            
          } else {
            alert("No address available");
          }
        }
      });
    }, error => {
      alert('No se pudo obtener la geolocalización');
      this.isLoading=false;
      console.log(error);

    });

      
    
    
  } */

}
