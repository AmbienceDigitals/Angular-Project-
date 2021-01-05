import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from "../filter.pipe";
import { LoggingService } from "../logging.service";
import { DataService } from "../data.service";
import { analyzeAndValidateNgModules } from '@angular/compiler';
declare var firebase: any;


@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})

export class DirectoryComponent implements OnInit {
  ninjas: any = [];

  bool = null;
 
  term = ''; 

  name = '';

  belt = '';


  constructor(private logger: LoggingService,
    private dataService: DataService) { }

    logIt() {
      this.logger.log();
    }

  ngOnInit(): void {
    this.dataService.fetchData().subscribe(
      data => this.ninjas = data
    ); 

    // this.dataService.postData(this.name, this.belt).subscribe(
    //   data => this.ninjas = data
    // );

    this.fbGetData();
    this.fbPostData(this.name, this.belt);
  }

  fbGetData() {
    firebase.database().ref('/').on('child_added', (snapshot) => {
      this.ninjas.push(snapshot.val())
    });

    
  }

  fbPostData(name, belt) {

    firebase.database().ref('/').push({name: name, belt: belt});
  }


}
