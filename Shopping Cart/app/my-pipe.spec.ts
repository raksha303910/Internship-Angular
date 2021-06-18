import { MyPipe } from './my-pipe';

describe('MyPipe', () => {
  it('should create an instance', () => {
    expect(new MyPipe()).toBeTruthy();
  });

  it('should return substring',()=>{
    expect(new MyPipe().transform("describe this")).toBe('descr...');
  });

});