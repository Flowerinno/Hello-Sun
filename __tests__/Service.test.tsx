// @ts-nocheck
import { handlers } from "../mocks/handlers";
import { setupServer } from "msw/node";
import { fetchHandler } from "../services/fetchData";
import { waitFor } from "@testing-library/react";

const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

it("fetches data from api", async () => {
	const response = await waitFor(() => fetchHandler("/data", "/data7"));
	expect(response).not.toBeNull();
});
