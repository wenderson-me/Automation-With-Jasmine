import { TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';

LikeWidgetComponent

describe(LikeWidgetComponent.name,  () => {
  let component : LikeWidgetComponent = null;

  beforeEach( async () => {
    //TestBed prepara o modulo para teste
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
    }).compileComponents();
  })

  it('', () => {
    
  });
});