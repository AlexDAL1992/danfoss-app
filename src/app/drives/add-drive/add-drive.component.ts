import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { DrivesService } from '../drives.service';

@Component({
  selector: 'app-add-drive',
  templateUrl: './add-drive.component.html',
  styleUrls: ['./add-drive.component.scss'],
})
export class AddDriveComponent implements OnInit {
  form: FormGroup;
  private index = 3;

  constructor(
    private modalCtrl: ModalController,
    private drivesService: DrivesService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      qrCode: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      location: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      designationTag: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      brand: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      model: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      partNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      serialNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      sizeKw: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      sizeA: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      ipRating: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      year: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      lifecycleStatus: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      assetCriticality: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      condition: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      comments: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      action: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      status: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      result: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      recommendation: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onExit() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onAddDrive() {
    if (!this.form.valid) {
      return;
    }

    ++this.index;
    this.loadingCtrl.create({message: 'Adding new drive...'})
    .then(loadingElement => {
      loadingElement.present();

      this.drivesService.addDrive(
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
      ).subscribe(() => {
        loadingElement.dismiss();
        this.form.reset();
        this.onExit();
      });
    });
  }
}
