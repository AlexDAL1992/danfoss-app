import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AddDriveComponent } from '../drives/add-drive/add-drive.component';
import { Drive } from '../drives/drive.model';
import { DrivesService } from '../drives/drives.service';

@Component({
  selector: 'app-site-assessment',
  templateUrl: './site-assessment.page.html',
  styleUrls: ['./site-assessment.page.scss'],
})
export class SiteAssessmentPage implements OnInit, OnDestroy {
  drives: Drive[];
  private drivesSub: Subscription;

  constructor(
    private drivesService: DrivesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {
    this.drivesSub = this.drivesService.drives.subscribe((drives) => {
      this.drives = drives;
    });
  }

  onAddNewDrive() {
    this.modalCtrl
      .create({
        component: AddDriveComponent,
      })
      .then((modalElement) => {
        modalElement.present();
      });
  }

  ngOnDestroy() {
    if (this.drivesSub) {
      this.drivesSub.unsubscribe();
    }
  }
}
