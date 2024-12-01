import { describe, it, expect, vi } from 'vitest';  // Import vitest functions
import request from "../lib/axios";                   // Import axios instance
import { contactApi } from './contact';
import { API_ROUTES } from "../constants/index";

// Mock axios request post method
vi.mock('../lib/axios', () => ({
    default: { post: vi.fn() },  // Mock the post function
}));

describe('contactApi', () => {
    it('should call request.post with correct data', async () => {
        const mockMessage = { name: "John", email: "john@example.com", message: "Hello!" };
        const mockResponse = { status: 200, data: { success: true } };

        // Mock the response for axios post
        request.post.mockResolvedValue(mockResponse);

        // Call the sendContactMessage function
        const response = await contactApi.sendContactMessage(mockMessage);

        // Check if the axios post was called with the correct parameters
        expect(request.post).toHaveBeenCalledWith(API_ROUTES.CONTACT, mockMessage);
        expect(response).toEqual(mockResponse);  // Ensure the response is what we mocked
    });

    it('should handle error when request.post fails', async () => {
        const mockMessage = { name: "John", email: "john@example.com", message: "Hello!" };
        const mockError = new Error('Request failed');
        // Mock the error
        request.post.mockRejectedValue(mockError);

        try {
            await contactApi.sendContactMessage(mockMessage);
        } catch (error) {
            expect(error).toEqual(mockError);  // Ensure the error is handled correctly
        }
    });
});
