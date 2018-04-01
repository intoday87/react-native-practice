import Users from './users';
import axios from 'axios';

jest.mock('axios');

describe('users', () => {
  it('should ', () => {
    const resp = { data: [{ name: 'Bob' }] };
    axios.get.mockResolvedValue(resp);

    Users.all().then(users => expect(users).toEqual(resp.data));
  });
});
