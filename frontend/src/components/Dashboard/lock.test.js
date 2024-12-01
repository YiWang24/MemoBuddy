import { render, screen, fireEvent } from '@testing-library/react';
import { vi } from 'vitest';
import LockPassword from '../components/LockPassword'; // Adjust the path based on where your component is

describe('Lock Component', () => {
    it('should call handleLockSubmit with diaryId and password when form is submitted', () => {
        // Mock the handleLockSubmit function
        const mockHandleLockSubmit = vi.fn();
        const mockSetPassword = vi.fn();
        const mockHandleLockShow = vi.fn();

        const diaryId = 1;
        const password = 'mySecurePassword';

        // Render the component with props
        render(
            <LockPassword
                diaryId={diaryId}
                password={password}
                setPassword={mockSetPassword}
                handleLockSubmit={mockHandleLockSubmit}
                handleLockShow={mockHandleLockShow}
                isLocked={false}
            />
        );

        // Find the form element
        const form = screen.getByRole('form');

        // Trigger the form submission
        fireEvent.submit(form);

        // Check if handleLockSubmit was called with the correct parameters
        expect(mockHandleLockSubmit).toHaveBeenCalledWith(diaryId, password);
    });
});
