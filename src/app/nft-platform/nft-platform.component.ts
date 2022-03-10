import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nft-platform',
  templateUrl: './nft-platform.component.html',
  styleUrls: ['./nft-platform.component.css']
})
export class NftPlatformComponent implements OnInit {
  // Modules => 'mint', 'own', 'all'
  public currentModule: string = 'all';

  constructor() { }

  ngOnInit(): void { }

}
