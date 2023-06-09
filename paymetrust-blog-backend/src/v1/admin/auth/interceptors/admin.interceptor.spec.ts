import { AdminInterceptor } from './admin.interceptor';

describe('UserInterceptor', () => {
  it('should be defined', () => {
    expect(new AdminInterceptor()).toBeDefined();
  });
});
