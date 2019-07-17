import { EveningTimePipe } from './evening-time.pipe';

describe('EveningTimePipe', () => {
  it('create an instance', () => {
    const pipe = new EveningTimePipe();
    expect(pipe).toBeTruthy();
  });
});
