import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks:any[]=[];
  createdCode=null;
  qrData=null;
  scannedCode = null;
  tagstart:string="<iframe id=iframeId hidden src=";
  tagend:string='></iframe>';
  url:string='"http://www.minze.byethost7.com/sendmailqr?';
  var1:string='name=tienda_de_confianza';
  var2:string='mail=whatthefuck@gmail.com';
  var3:string='content=Se_te_ha_perdido_el_chico_en_esta_tienda"';
  var4:string="hobbie3=";
  var5:string="hobbie4=";
  var6:string="hobbie5=";
  var7:string="hobbie6=";
  tagcomplete:string = this.tagstart.concat(this.url,this.var1,"&",this.var2,"&",this.var3,this.tagend);
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner) {
this.url='"http://www.minze.byethost7.com/sendmailqr?';
    console.log(this.tagcomplete);
    
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }

  createCode() {
    document.getElementById('divisor').innerHTML=this.tagcomplete;
    this.createdCode = this.qrData;
  }
  update(){
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.goToRoot;
  }
  
}
