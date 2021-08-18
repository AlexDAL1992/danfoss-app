import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { on } from 'events';
import { Drive } from 'src/app/models/drive/drive.model';
import { DrivesService } from '../../services/drive/drives.service';

@Component({
  selector: 'app-add-drive',
  templateUrl: './drive-form.component.html',
  styleUrls: ['./drive-form.component.scss'],
})
export class DriveFormComponent implements OnInit {
  @Input() drive: Drive;
  @Input() titleText: string;
  @Input() indicator: string;

  form: FormGroup;
  private index = 3;

  constructor(
    private modalCtrl: ModalController,
    private drivesService: DrivesService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      qrCode: new FormControl(this.drive.qrCode, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      location: new FormControl(this.drive.location, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      designationTag: new FormControl(this.drive.designationTag, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      brand: new FormControl(this.drive.brand, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(this.drive.model, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      partNumber: new FormControl(this.drive.partNo, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      serialNumber: new FormControl(this.drive.serialNo, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      sizeKw: new FormControl(this.drive.sizeKW, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      sizeA: new FormControl(this.drive.sizeA, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      ipRating: new FormControl(this.drive.ipRating, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      year: new FormControl(this.drive.year, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      lifecycleStatus: new FormControl(this.drive.lifecycleStatus, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      assetCriticality: new FormControl(this.drive.assetCriticality, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      condition: new FormControl(this.drive.condition, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      comments: new FormControl(this.drive.comments, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      action: new FormControl(this.drive.actionTaken, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      status: new FormControl(this.drive.equipmentStatus, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      result: new FormControl(this.drive.resultOf3Ratings, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      recommendation: new FormControl(this.drive.recommendation, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onExit() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onClickEvent() {
    /* if (!this.form.valid) {
      return;
    } */

    if (this.indicator === 'update') {
      this.drivesService.updateDrive(this.drive).subscribe(() => {
        this.form.reset();
        this.onExit();
      });
    } else if (this.indicator === 'add') {
      ++this.index;
      this.loadingCtrl
        .create({ message: 'Adding new drive...' })
        .then((loadingElement) => {
          loadingElement.present();

          const newDrive = new Drive(
            'drive' + this.index,
            this.form.value.qrCode,
            this.form.value.location,
            this.form.value.designationTag,
            this.form.value.brand,
            this.form.value.model,
            this.form.value.partNumber,
            this.form.value.serialNumber,
            this.form.value.sizeKw,
            this.form.value.sizeA,
            this.form.value.ipRating,
            new Date(this.form.value.year),
            this.form.value.lifecycleStatus,
            this.form.value.assetCriticality,
            this.form.value.condition,
            this.form.value.comments,
            this.form.value.action,
            this.form.value.status,
            this.form.value.result,
            this.form.value.recommendation
          );
          this.drivesService.addDrive(newDrive).subscribe(() => {
            loadingElement.dismiss();
            this.form.reset();
            this.onExit();
          });
        });
    }
  }

  /* onAddDrive() {
    if (!this.form.valid) {
      return;
    }

    ++this.index;
    this.loadingCtrl
      .create({ message: 'Adding new drive...' })
      .then((loadingElement) => {
        loadingElement.present();

        const newDrive = new Drive(
          'drive' + this.index,
          this.form.value.qrCode,
          this.form.value.location,
          this.form.value.designationTag,
          this.form.value.brand,
          this.form.value.model,
          this.form.value.partNumber,
          this.form.value.serialNumber,
          this.form.value.sizeKw,
          this.form.value.sizeA,
          this.form.value.ipRating,
          new Date(this.form.value.year),
          this.form.value.lifecycleStatus,
          this.form.value.assetCriticality,
          this.form.value.condition,
          this.form.value.comments,
          this.form.value.action,
          this.form.value.status,
          this.form.value.result,
          this.form.value.recommendation
        );
        this.drivesService.addDrive(newDrive).subscribe(() => {
          loadingElement.dismiss();
          this.form.reset();
          this.onExit();
        });
      });
  }

  onUpdateDrive() {
    const updatedDrive = new Drive(
      this.form.value.id,
      this.form.value.qrCode,
      this.form.value.location,
      this.form.value.designationTag,
      this.form.value.brand,
      this.form.value.model,
      this.form.value.partNo,
      this.form.value.serialNo,
      this.form.value.sizeKW,
      this.form.value.sizeA,
      this.form.value.ipRating,
      this.form.value.year,
      this.form.value.lifecycleStatus,
      this.form.value.assetCriticality,
      this.form.value.condition,
      this.form.value.comments,
      this.form.value.actionTaken,
      this.form.value.equipmentStatus,
      this.form.value.resultOf3Ratings,
      this.form.value.recommendation
    );

    this.drivesService.updateDrive(this.drive).subscribe(() => {
      this.form.reset();
      this.onExit();
    });
  } */
}
