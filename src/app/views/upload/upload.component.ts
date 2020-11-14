import { Component, OnInit } from '@angular/core';
import { UploadFilesService } from '../../services/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ActivatedRoute, Route, ActivatedRouteSnapshot, UrlSegment, Params, Data, Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'upload.component.html'
})
export class UploadComponent implements OnInit { 
  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  accountList=[];
  accountInfo={};
  accountDetail={};
  auditInfo={};
  sourceElement: any;
  fileInfos: Observable<any>;
  id ="";
  currentYearString="";
  constructor(private uploadService: UploadFilesService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log("param: "+JSON.stringify(params)); 
      if (params['id']) {
        try {
          let linkContentString = atob(params['id']);
          console.log("linkContentString: "+linkContentString);
          this.linkContent = JSON.parse(linkContentString);
          this.id=this.linkContent['Company Name'];
          this.currentYearString=this.linkContent['Type Details']['Audit Year']
          const stringInput = localStorage.getItem('accountList');
          this.accountList = JSON.parse(stringInput);
          if (!this.accountList) {
            return;
          }
          let foundindex = -1;
          for (let i = 0; i < this.accountList.length; i++) {
            if (this.accountList[i]['Company Name'] === this.id) {
              foundindex = i;
              break;
            }
          }
          if (foundindex < 0) { return; }
          this.accountInfo = this.accountList[foundindex];
          if (this.accountInfo['accountDetail']) {
            this.accountDetail = this.accountInfo['accountDetail'];
          }
          if (this.accountInfo['audit'] && this.accountInfo['audit'][this.currentYearString]) {
            this.auditInfo = this.accountInfo['audit'][this.currentYearString];
          }

          if (this.auditInfo['documents'] && this.auditInfo['documents'][0]) {
            
            this.requiredFiles = this.auditInfo['documents'][0]['documentRequestList'];
          }
        } catch (Error) {
          this.linkContent=null;
          this.isWrongLink=true;
        }
      }
  });
  }

  linkContent={};
  selectFiles(event) {
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
    this.sourceElement = event.srcElement;
    for (let i =0; i < this.selectedFiles.length; i++) {
      this.progressInfos[i] = { value: 0, fileName: this.selectedFiles[i].name, type: '' };
    }
    
  }

  isWrongLink=false;

  requiredFiles=[];
  
  uploadFiles() {
    this.message = '';
  
    for (let i = 0; i < this.selectedFiles.length; i++) {
      this.upload(i, this.selectedFiles[i]);
    }
    this.sourceElement.value = null;
    this.selectedFiles = null;
  }

  getAllSelected() {
    let myReturn = true;
    for (let progressInfo of this.progressInfos) {
      if (!Boolean(progressInfo.type)) {
        console.log("return bad!!!!!");
        return false;
      } 
    }
    console.log("return good!!!!!");
    return myReturn;
  }
  upload(idx, file) {
    //this.progressInfos[idx] = { value: 0, fileName: file.name };
  
    this.uploadService.upload(file).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.progressInfos[idx].value  = 100;
          
          this.fileInfos = this.uploadService.getFiles();
          if( ! this.auditInfo['documentsUploaded']) {
            this.auditInfo['documentsUploaded'] = [];
          }
          for (let i =0; i < this.requiredFiles.length; i++) {
            if (this.requiredFiles[i]['English'] == this.progressInfos[idx].type) {
              let nowDate = new Date();
              console.log("TYPE!!::::  "+this.progressInfos[idx].type);
              if (this.requiredFiles[i]['uploadedFiles'] === undefined) this.requiredFiles[i]['uploadedFiles'] = "";
              this.requiredFiles[i]['uploadedFiles'] += this.progressInfos[idx].fileName +",  ";
              let documentUploaded = {"File Type":this.progressInfos[idx].type, "File Name":this.progressInfos[idx].fileName, "Uploaded Date": nowDate};
              this.auditInfo['documentsUploaded'].push(documentUploaded);
            }
          }
          localStorage.setItem('accountList', JSON.stringify(this.accountList));
        }
      },
      err => {
        this.progressInfos[idx].value = 0;
        this.message = 'Could not upload the file:' + file.name;
      });
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    
    req.open('GET', 'assets/data/upload.json');

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }
  ngOnInit() {
    // this.fetch((data) => {
    //      this.requiredFiles = data;
    // });
  }
  
}
