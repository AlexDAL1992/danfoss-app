import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoadingController, ModalController } from '@ionic/angular';
import { CustomersService } from '../services/customer/customers.service';

@Component({
  selector: 'app-new-site-assessment',
  templateUrl: './new-site-assessment.component.html',
  styleUrls: ['./new-site-assessment.component.scss'],
})
export class NewSiteAssessmentComponent implements OnInit {
  form: FormGroup;

  constructor(
    private modalCtrl: ModalController,
    private customersService: CustomersService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      customerNumber: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      customerName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
      technicianName: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required],
      }),
    });
  }

  onExit() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSearchCustomer() {
    if (!this.form.valid) {
      return;
    }

    this.loadingCtrl
      .create({ message: 'Searching for customer information ...' })
      .then((loadingElement) => {
        loadingElement.present();

        return this.customersService.searchCustomer(
          this.form.value.customerNumber,
          this.form.value.customerName
        );
      });
  }
}
