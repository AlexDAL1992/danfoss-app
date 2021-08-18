import { Component, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { DriveFormComponent } from '../drives/drive/drive-form.component';
import { Drive } from '../models/drive/drive.model';
import { DrivesService } from '../services/drive/drives.service';

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

  async onUpdateDrive(drive: Drive) {
    const modal = await this.modalCtrl.create({
      component: DriveFormComponent,
      componentProps: {
        drive,
        titleText: 'Update drive',
        indicator: 'update',
      },
    });
    return await modal.present();
  }

  onAddNewDrive() {
    this.modalCtrl
      .create({
        component: DriveFormComponent,
        componentProps: {
          titleText: 'Add new drive',
          indicator: 'add',
        },
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
