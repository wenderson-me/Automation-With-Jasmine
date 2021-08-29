import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LikeWidgetComponent } from './like-widget.component';
import { LikeWidgetModule } from './like-widget.module';

LikeWidgetComponent

describe(LikeWidgetComponent.name,  () => {
  //fixture: wrapper que embrulha o componente a ser testado
  let fixture: ComponentFixture<LikeWidgetComponent> = null;
  let component: LikeWidgetComponent;

  beforeEach( async () => {
    //TestBed prepara o modulo para teste
    await TestBed.configureTestingModule({
      imports: [LikeWidgetModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);
    component = fixture.componentInstance
  })

  it('Should create component', () => {
      
      expect(component).toBeTruthy();
  });

  it('Should auto generate ID when id input property is missing', () => {
    
    fixture.detectChanges();
    expect(component.id).toBeTruthy();
  });

  it('Should NOT generate ID when id input property is present', () => {
    
    const someId = 'someId';
    component.id = someId;
    fixture.detectChanges();
    expect(component.id).toBe(someId);
  });

  it(`${LikeWidgetComponent.prototype.like.name}
  should trigger emission when called`, () => {
    
    fixture.detectChanges();
    component.liked.subscribe(() => {
      expect(true).toBeTrue()
    })
    component.like()
  });
});