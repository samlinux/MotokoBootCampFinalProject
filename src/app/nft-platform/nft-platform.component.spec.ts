import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NftPlatformComponent } from './nft-platform.component';

describe('NftPlatformComponent', () => {
  let component: NftPlatformComponent;
  let fixture: ComponentFixture<NftPlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NftPlatformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NftPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
