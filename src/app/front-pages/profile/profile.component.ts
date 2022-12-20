import { HttpErrorResponse } from '@angular/common/http';
import { AfterContentInit, Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { forkJoin, Observable } from 'rxjs';
import { OpenReservation } from 'src/app/models/OpenReservation';
import { Reservation } from 'src/app/models/Reservation';
import { User } from 'src/app/models/User';
import { ApiService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingService } from 'src/app/services/loading.service';
import { UtilitiesService } from 'src/app/services/utilities.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterContentInit {

  public user!: User;
  public openReservations: OpenReservation[] = [];
  public reservations: Reservation[] = [];

  constructor(private auth: AuthenticationService,
    public utilities: UtilitiesService,
    public loading: LoadingService,
    private apiService: ApiService) { }

  ngAfterContentInit(): void {
    this.user = this.auth.getStorageUser();
  }

  ngOnInit(): void {
    this.auth.userChanges.subscribe((user: User) => {
      this.user = user;
      console.log("usuario actualizado", user);
    });
    this.getUserReservations();
  }

  public getUserReservations(): void {
    this.loading.startLoading();
    let obOpenReservations: Observable<OpenReservation[]> = this.apiService.getEntity('user-open-reservations');
    let obReservations: Observable<Reservation[]> = this.apiService.getEntity('user-reservations');

    let requests = [obOpenReservations, obReservations];

    forkJoin(requests).subscribe({
      next: (data) => {

        const openReservations: OpenReservation[] = data[0] as OpenReservation[];
        const reservations: Reservation[] = data[1] as Reservation[];

        this.reservations = reservations;
        this.openReservations = openReservations;

        this.loading.stopLoading();
      },
      error: (error) => {
        console.log(error);
        this.loading.stopLoading();
      }
    });
  }


  public logout(): void {
    this.auth.logout();
  }

  public updateUser(): void {
    this.loading.startLoading();
    this.apiService.updateEntity('users', this.user?.id!, this.user).subscribe((user: User) => {
      this.user = user;
      this.auth.userChanges.next(user);
      this.auth.setStorageUser(user);
      this.loading.stopLoading();
    }, (error: HttpErrorResponse) => {
      console.log(error);
      this.loading.stopLoading();
    });
  }

  public ngOnDestroy(): void {
    this.updateUser();
  }


  public setImageBase64(e: any) {
    var file = e.dataTransfer ? e.dataTransfer.files[0] : e.target.files[0];
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onload = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);

  }

  _handleReaderLoaded(e: any) {
    let reader = e.target;
    this.user.upload_image = reader.result;
    console.log(this.user, "xd")
  }



}
