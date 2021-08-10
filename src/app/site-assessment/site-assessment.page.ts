import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { AddDriveComponent } from '../drives/add-drive/add-drive.component';
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
  //private drive: Drive = document.getElementsByName('drive');

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
      component: AddDriveComponent,
      componentProps: {
        id: drive.id,
        qrCode: drive.qrCode,
        location: drive.location,
        designationTag: drive.designationTag,
        brand: drive.brand,
        model: drive.model,
        partNumber: drive.partNo,
        serialNumber: drive.serialNo,
        sizeKw: drive.sizeKW,
        sizeA: drive.sizeA,
        ipRating: drive.ipRating,
        year: drive.year,
        lifecycleStatus: drive.lifecycleStatus,
        assetCriticality: drive.assetCriticality,
        condition: drive.condition,
        comments: drive.comments,
        action: drive.actionTaken,
        status: drive.equipmentStatus,
        result: drive.resultOf3Ratings,
        recommendation: drive.recommendation,
      },
    });
    return await modal.present();
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
