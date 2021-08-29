import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

LikeWidgetComponent

describe(LikeWidgetComponent.name,  () => {
  //fixture: wrapper que embrulha o componente a ser testado
  let fixture: ComponentFixture<LikeWidgetComponent> = null;

  beforeEach( async () => {
    //TestBed prepara o modulo para teste
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
  })

  it('Should create component', () => {
      const component = fixture.componentInstance;
      expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    const componet = fixture.componentInstance;
    fixture.detectChanges();
    expect(componet.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    const componet = fixture.componentInstance;
    const someId = 'someId';
    componet.id = someId;
    fixture.detectChanges();
    expect(componet.id).toBe(someId);
  });
});