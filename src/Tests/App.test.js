import renderer from "react-test-renderer";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

it("Render App component", () => {
  const app = renderer.create(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  expect(app).toBeTruthy();
});
