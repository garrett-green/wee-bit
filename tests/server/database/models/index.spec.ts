import { LinkModel } from '../../../../src/server/database/models';
import { disconnect, mockConnect, mockLinkModel } from '../../../mocks';

describe('Link Model Test', () => {
  beforeAll(async () => {
    await mockConnect();
  });

  afterAll(async () => {
    await disconnect();
  });

  it('Successfully creates and saves a link', async () => {
    const validLink = new LinkModel({
      URL: mockLinkModel.URL,
      shortURL: mockLinkModel.shortURL,
    });
    const savedLink = await validLink.save();
    expect(savedLink._id).toBeDefined();
    expect(savedLink.URL).toBe(mockLinkModel.URL);
    expect(savedLink.shortURL).toBe(mockLinkModel.shortURL);
  });

  it('Creates retrieves a link via the shortURL/slug', async () => {
    const queryResult = await LinkModel.findOne({
      shortURL: mockLinkModel.shortURL,
    });
    expect(queryResult!._id).toBeDefined();
    expect(queryResult!.URL).toBe(mockLinkModel.URL);
    expect(queryResult!.shortURL).toBe(mockLinkModel.shortURL);
  });
});
