import { TestBed } from '@angular/core/testing';
import { TableApp } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableApp],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(TableApp);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'Welcome table',
    );
  });
});
