import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GradientText } from ".";

const mockText = "mock text";

describe("GradientText", () => {
  it("should display the text passed as prop", () => {
    render(<GradientText>{mockText}</GradientText>);

    const text = screen.getByText(mockText);
    expect(text).toBeInTheDocument();
  });
});
