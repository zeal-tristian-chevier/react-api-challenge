import React from 'react';
import axios from 'axios';
import { fetchNewsData } from '../components/Home/Home';

jest.mock('axios');

describe('fetchNewsData', () => {
    it('should return an empty array when searchValue is empty', async () => {
        const result = await fetchNewsData('');
        expect(result).toEqual([]);
    });

    it('should return filtered articles when the API call succeeds', async () => {
        const mockArticles = [{ title: 'Valid Article' }, { title: '[Removed]' }];
        (axios.get as jest.Mock).mockResolvedValue({ data: { articles: mockArticles } });

        const result = await fetchNewsData('search');
        expect(result).toEqual([{ title: 'Valid Article' }]);
    });

    it('should return "No news found" if filtered articles array is empty', async () => {
        const mockArticles = [{ title: '[Removed]' }];
        (axios.get as jest.Mock).mockResolvedValue({ data: { articles: mockArticles } });

        const result = await fetchNewsData('search');
        expect(result).toEqual('No news found');
    });

    it('should return "Error fetching news" when the API call fails', async () => {
        (axios.get as jest.Mock).mockRejectedValue(new Error('API error'));

        const result = await fetchNewsData('search');
        expect(result).toEqual('Error fetching news');
    });
});
