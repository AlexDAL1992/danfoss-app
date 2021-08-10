/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Drive } from '../../models/drive/drive.model';
import { take, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DrivesService {
  private _drives = new BehaviorSubject<Drive[]>([
    new Drive(
      'drive1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      new Date(2019, 1),
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1',
      'Drive 1'
    ),
    new Drive(
      'drive2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      new Date(2020, 1),
      'Drive 2',
      'Dri2e 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2',
      'Drive 2'
    ),
    new Drive(
      'drive3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      new Date(2021, 1),
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3',
      'Drive 3'
    ),
  ]);

  get drives() {
    return this._drives.asObservable();
  }

  constructor() {}

  getDrive(id: string) {
    return this.drives.pipe(
      take(1),
      map((drives) => ({ ...drives.find((d) => d.id === id) }))
    );
  }

  addDrive(
    id: string,
    qrCode: string,
    location: string,
    designationTag: string,
    brand: string,
    model: string,
    partNo: string,
    serialNo: string,
    sizeKW: string,
    sizeA: string,
    ipRating: string,
    year: Date,
    lifecycleStatus: string,
    assetCriticality: string,
    condition: string,
    comments: string,
    actionTaken: string,
    equipmentStatus: string,
    resultOf3Ratings: string,
    recommendation: string
  ) {
    const newDrive = new Drive(
      id,
      qrCode,
      location,
      designationTag,
      brand,
      model,
      partNo,
      serialNo,
      sizeKW,
      sizeA,
      ipRating,
      year,
      lifecycleStatus,
      assetCriticality,
      condition,
      comments,
      actionTaken,
      equipmentStatus,
      resultOf3Ratings,
      recommendation
    );

    return this.drives.pipe(
      take(1),
      tap((drives) => {
        this._drives.next(drives.concat(newDrive));
      })
    );
  }

  updateDrive(
    id: string,
    qrCode: string,
    location: string,
    designationTag: string,
    brand: string,
    model: string,
    partNo: string,
    serialNo: string,
    sizeKW: string,
    sizeA: string,
    ipRating: string,
    year: Date,
    lifecycleStatus: string,
    assetCriticality: string,
    condition: string,
    comments: string,
    actionTaken: string,
    equipmentStatus: string,
    resultOf3Ratings: string,
    recommendation: string
  ) {
    return this.drives.pipe(
      take(1),
      tap((drives) => {
        const updatedDriveIndex = drives.findIndex((drive) => drive.id === id);
        const updatedDrives = [...drives];
        const oldDrive = updatedDrives[updatedDriveIndex];
        updatedDrives[updatedDriveIndex] = new Drive(
          oldDrive.id,
          qrCode,
          location,
          designationTag,
          brand,
          model,
          partNo,
          serialNo,
          sizeKW,
          sizeA,
          ipRating,
          year,
          lifecycleStatus,
          assetCriticality,
          condition,
          comments,
          actionTaken,
          equipmentStatus,
          resultOf3Ratings,
          recommendation
        );
        this._drives.next(updatedDrives);
      })
    );
  }
}
