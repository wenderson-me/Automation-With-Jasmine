import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UniqueIdService } from '../../services/unique-id/unique-id.service';
import { LikeWidgetComponent } from './like-widget.component';

LikeWidgetComponent

describe(LikeWidgetComponent.name,  () => {
  //fixture: wrapper que embrulha o componente a ser testado
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach( async () => {
    //TestBed prepara o modulo para teste
    await TestBed.configureTestingModule({
      declarations: [LikeWidgetComponent],
      providers: [UniqueIdService]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  })

  it('Should create component', () => {
      const instance = fixture.componentInstance;
      expect(instance).toBeTruthy();
  });
});