import { DexService } from 'src/app/services/dex.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {
  offset = 0;
  pokemon = [];
  @ViewChild(IonInfiniteScroll) infinite: IonInfiniteScroll;

  constructor(private dexService: DexService) {}

  ngOnInit() {
    this.loadDex();

  }

  loadDex(loadMore = false, event?) {
    if (loadMore) {
      this.offset += 25;
    }
    this.dexService.getDex(this.offset).subscribe(res => {
      console.log('result: ', res);
      this.pokemon = [...this.pokemon, ...res];

      if (event) {
        event.target.complete();
      }
      if (this.offset == 125) {
        this.infinite.disabled = true;
      }
    });  
  }
  onSearchChange(e) {
    let value = e.detail.value;

    if (value == ''){
      this.offset = 0;
      this.loadDex();
      return;
    }

    this.dexService.findPokemon(value).subscribe(res => {
      this.pokemon = [res];
    }, err => {
      this.pokemon = [];
    });

  }

}
