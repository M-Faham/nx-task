import { TestBed } from '@angular/core/testing';
import { DataApp } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataApp,],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(DataApp);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Welcome data');
  });
});
