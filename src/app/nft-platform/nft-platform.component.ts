import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-nft-platform',
  templateUrl: './nft-platform.component.html',
  styleUrls: ['./nft-platform.component.css']
})
export class NftPlatformComponent implements OnInit {
  // Modules => 'mint', 'own', 'all'
  public currentModule: string = 'all';

  constructor(
    public authService: UserAuthService
  ) { }

  ngOnInit(): void { }

}
