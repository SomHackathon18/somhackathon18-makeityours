import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from "@ionic-native/geolocation";
import { INIT_ZINDEX } from 'ionic-angular/navigation/nav-util';

@Component({
  selector: 'page-history',
  templateUrl: 'history.html'
})
export class HistoryPage {
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public geolocation: Geolocation) {
  
    
  }
}
