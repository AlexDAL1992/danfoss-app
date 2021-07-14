import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-new-site-assessment',
  templateUrl: './new-site-assessment.component.html',
  styleUrls: ['./new-site-assessment.component.scss'],
})
export class NewSiteAssessmentComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onExit() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

  onSearchCustomer(){}
}
