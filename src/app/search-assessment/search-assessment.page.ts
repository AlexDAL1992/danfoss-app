import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NewSiteAssessmentComponent } from '../new-site-assessment/new-site-assessment.component';

@Component({
  selector: 'app-search-assessment',
  templateUrl: './search-assessment.page.html',
  styleUrls: ['./search-assessment.page.scss'],
})
export class SearchAssessmentPage implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
  }

  onSearchCustomer(){
    this.modalCtrl
      .create({
        component: NewSiteAssessmentComponent,
      })
      .then((modalElement) => {
        modalElement.present();
      });
  }

  onExistingAssessment(){
    this.router.navigateByUrl('/site-assessment');
  }

}
