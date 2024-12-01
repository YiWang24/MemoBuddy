import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react-hooks";
import { message } from "antd";
import { diaryApi } from "@/api";
import Dashboard from "./Dashboard"; // Adjust the import path as needed

vi.mock("antd", () => ({
    message: {
        success: vi.fn(),
        error: vi.fn(),
    },
}));

vi.mock("@/api", () => ({
    diaryApi: {
        deleteDiary: vi.fn(),
    },
}));

describe("handleDeleteDiary", () => {
    it("should delete a diary and update the diary list", async () => {
        // Mock diaryApi.deleteDiary to resolve successfully
        diaryApi.deleteDiary.mockResolvedValue({});

        // Mock diary data
        const initialDiaryList = [
            { id: "1", title: "Diary 1", content: "Content 1" },
            { id: "2", title: "Diary 2", content: "Content 2" },
        ];

        const { result } = renderHook(() => {
            const diaryList = initialDiaryList;
            const setDiaryList = vi.fn();
            return { diaryList, setDiaryList };
        });

        // Call the handleDeleteDiary function
        const diaryIdToDelete = "1";
        await act(async () => {
            await Dashboard.handleDeleteDiary(diaryIdToDelete);
        });

        // Assertions
        expect(diaryApi.deleteDiary).toHaveBeenCalledWith(diaryIdToDelete);
        expect(result.current.setDiaryList).toHaveBeenCalledWith([
            { id: "2", title: "Diary 2", content: "Content 2" },
        ]);
        expect(message.success).toHaveBeenCalledWith("Diary deleted successfully!");
    });

    it("should show an error message if delete fails", async () => {
        // Mock diaryApi.deleteDiary to reject with an error
        diaryApi.deleteDiary.mockRejectedValue(new Error("Delete failed"));

        const initialDiaryList = [
            { id: "1", title: "Diary 1", content: "Content 1" },
        ];

        const { result } = renderHook(() => {
            const diaryList = initialDiaryList;
            const setDiaryList = vi.fn();
            return { diaryList, setDiaryList };
        });

        // Call the handleDeleteDiary function
        const diaryIdToDelete = "1";
        await act(async () => {
            await Dashboard.handleDeleteDiary(diaryIdToDelete);
        });

        // Assertions
        expect(diaryApi.deleteDiary).toHaveBeenCalledWith(diaryIdToDelete);
        expect(result.current.setDiaryList).not.toHaveBeenCalled();
        expect(message.error).toHaveBeenCalledWith("Failed to delete diary.");
    });
});
