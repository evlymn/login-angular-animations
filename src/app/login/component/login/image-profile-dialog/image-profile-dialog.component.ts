import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';

@Component({
  selector: 'app-image-profile-dialog',
  templateUrl: './image-profile-dialog.component.html',
  styleUrls: ['./image-profile-dialog.component.scss']
})
export class ImageProfileDialogComponent implements OnInit {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  constructor(public dialogRef: MatDialogRef<ImageProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.imageChangedEvent = data;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  okClose() {
    this.dialogRef.close(this.croppedImage);
  }
  cancelClose() {
    this.dialogRef.close();
  }

  imageLoaded(image: LoadedImage) {
    // show cropper
  }

  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }
  ngOnInit(): void {
  }

}
