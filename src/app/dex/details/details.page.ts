import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DexService } from 'src/app/services/dex.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  details; any;
  slideOpts = {
    autoplay: {
      delay: 1000,
      disableOnInteraction: false
    }
  };
  constructor(private route: ActivatedRoute, private dexService: DexService) { }

  ngOnInit() {
    let index = this.route.snapshot.paramMap.get('index');
    this.dexService.getPokeDetails(index).subscribe(details => {
      console.log('details: ', details);
      this.details = details;
    })
  }

}
