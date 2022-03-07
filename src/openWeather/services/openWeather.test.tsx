import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useOpenWeather } from "./useOpenWeather";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useOpenWeather", () => {
  it("should fetch data", async () => {
    const { result, waitFor } = renderHook(
      () => useOpenWeather({ lat: 66.33, lon: 163.13 }),
      { wrapper }
    );

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.name).not.toBeNull();
    expect(result.current.data?.main.temp).not.toBeNull();
    expect(result.current.data?.main.pressure).not.toBeNull();
    expect(result.current.data?.main.humidity).not.toBeNull();
  });
});
