import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Geolocation } from "@ionic-native/geolocation";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  tasks:any[]=[];
  createdCode=null;
  qrData=null;
  scannedCode = null;
  lat:any;
  long:any;
  content:string;
  tagstart:string="<iframe onload='update()' id=iframeId src=";
  tagend:string='"></iframe>';
  url:string='"http://www.minze.byethost7.com/sendmailqr?';
  var1:string='name=';
  var2:string='store=';
  var3:string='mail=';
  var4:string="long=";
  var5:string="lat=";
  var6:string="hobbie5=";
  var7:string="hobbie6=";
  tagcomplete:string = this.tagstart.concat(this.url,this.var1,"&",this.var2,"&",this.var3,"&",this.var4,"&",this.var5,this.tagend);
  constructor(public navCtrl: NavController,private barcodeScanner: BarcodeScanner,public geolocation: Geolocation) {
    console.log(this.tagcomplete);
    
  }
  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
      var parts=this.scannedCode.split(",");
      this.var1=this.var1.concat(parts[0]);
      this.var3=this.var3.concat(parts[1]);
    }, (err) => {
        console.log('Error: ', err);
    });
  }
getloc(){
  this.var4="lon=";
  this.var5="lat=";
  var any = this.geolocation.getCurrentPosition();
  this.geolocation.getCurrentPosition().then((position) => {
    this.lat = position.coords.latitude;
    this.long = position.coords.longitude;
    this.var4=this.var4.concat(this.lat);
    this.var5=this.var5.concat(this.long);
  });
    this.var2='store=zara'; 
    var provisional :string ="";
    provisional= provisional.concat(this.var1,this.var3); 
    document.getElementById('divisor').innerHTML=provisional;
    console.log(this.var1);
    console.log(this.var2);
    console.log(this.var3);
    console.log(this.var4);
    console.log(this.var5);
    this.tagcomplete = this.tagstart.concat(this.url,this.var1,"&",this.var2,"&",this.var3,this.tagend);
    

}
  createCode() {
    console.log(this.tagcomplete);
    this.tagcomplete = this.tagstart.concat(this.url,this.var1,"&",this.var2,"&",this.var3,this.tagend);
    document.getElementById('divisor').innerHTML=this.tagcomplete;
    this.createdCode = this.qrData;
    this.update();
  }
  update(){
    var vari=0;
    while(vari<100000){vari++;}
    this.navCtrl.setRoot(HomePage);
    this.navCtrl.popToRoot;
  }
  
}
