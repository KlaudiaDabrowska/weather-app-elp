import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "react-query";
import { useWeatherbit } from "./useWeatherbit";

const queryClient = new QueryClient();
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useWeatherbit", () => {
  it("should fetch data", async () => {
    const { result, waitFor } = renderHook(
      () => useWeatherbit({ lat: 11, lon: 22 }),
      { wrapper }
    );

    await waitFor(() => result.current.isSuccess);
    expect(result.current.data?.data[0].city_name).not.toBeNull();
    expect(result.current.data?.data[0].pres).not.toBeNull();
    expect(result.current.data?.data[0].rh).not.toBeNull();
    expect(result.current.data?.data[0].temp).not.toBeNull();
  });
});
