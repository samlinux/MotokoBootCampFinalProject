import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MintNftComponent } from './mint-nft/mint-nft.component';
import { ShowCollectionComponent } from './show-collection/show-collection.component';
import { NftPlatformComponent } from './nft-platform/nft-platform.component';

@NgModule({
  declarations: [
    AppComponent,
    MintNftComponent,
    ShowCollectionComponent,
    NftPlatformComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
