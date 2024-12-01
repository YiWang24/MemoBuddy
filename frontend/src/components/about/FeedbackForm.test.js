import { describe, it, expect, vi } from "vitest";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import FeedbackForm from "./FeedbackForm";
import { contactApi } from "@/api";

vi.mock("@/api", () => ({
    contactApi: {
        sendContactMessage: vi.fn(),
    },
}));

describe("FeedbackForm", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    });

    it("should successfully submit the form and reset the fields", async () => {
        // Mock the API response for a successful submission
        contactApi.sendContactMessage.mockResolvedValue({ status: 200 });

        render(<FeedbackForm />);

        // Fill out the form
        fireEvent.change(screen.getByPlaceholderText("Your name"), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByPlaceholderText("Your email"), {
            target: { value: "john.doe@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Subject"), {
            target: { value: "Feedback" },
        });
        fireEvent.change(screen.getByPlaceholderText("Your feedback"), {
            target: { value: "This is a test message." },
        });

        // Submit the form
        fireEvent.click(screen.getByText("Submit"));

        // Wait for async operations
        await waitFor(() => {
            expect(contactApi.sendContactMessage).toHaveBeenCalledWith({
                name: "John Doe",
                email: "john.doe@example.com",
                subject: "Feedback",
                message: "This is a test message.",
            });

            expect(screen.getByPlaceholderText("Your name").value).toBe("");
            expect(screen.getByPlaceholderText("Your email").value).toBe("");
            expect(screen.getByPlaceholderText("Subject").value).toBe("");
            expect(screen.getByPlaceholderText("Your feedback").value).toBe("");
        });

        // Ensure success message is displayed
        expect(window.alert).toHaveBeenCalledWith(
            "Your message has been submitted successfully!"
        );
    });

    it("should show an error alert if the API call fails", async () => {
        // Mock the API response for a failed submission
        contactApi.sendContactMessage.mockRejectedValue(new Error("API Error"));

        render(<FeedbackForm />);

        // Fill out the form
        fireEvent.change(screen.getByPlaceholderText("Your name"), {
            target: { value: "John Doe" },
        });
        fireEvent.change(screen.getByPlaceholderText("Your email"), {
            target: { value: "john.doe@example.com" },
        });
        fireEvent.change(screen.getByPlaceholderText("Subject"), {
            target: { value: "Feedback" },
        });
        fireEvent.change(screen.getByPlaceholderText("Your feedback"), {
            target: { value: "This is a test message." },
        });

        // Submit the form
        fireEvent.click(screen.getByText("Submit"));

        // Wait for async operations
        await waitFor(() => {
            expect(contactApi.sendContactMessage).toHaveBeenCalledWith({
                name: "John Doe",
                email: "john.doe@example.com",
                subject: "Feedback",
                message: "This is a test message.",
            });

            // Ensure error alert is displayed
            expect(window.alert).toHaveBeenCalledWith(
                "There was an error. Please try again later."
            );
        });
    });
});
