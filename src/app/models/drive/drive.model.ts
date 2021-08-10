export class Drive {
  constructor(
    public id: string,
    public qrCode: string,
    public location: string,
    public designationTag: string,
    public brand: string,
    public model: string,
    public partNo: string,
    public serialNo: string,
    public sizeKW: string,
    public sizeA: string,
    public ipRating: string,
    public year: Date,
    public lifecycleStatus: string,
    public assetCriticality: string,
    public condition: string,
    public comments: string,
    public actionTaken: string,
    public equipmentStatus: string,
    public resultOf3Ratings: string,
    public recommendation: string,
  ){}
}
