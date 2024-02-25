import Homepage from "../components/Homepage";
import { AuthenticatedPage } from "./AuthenticatedPage";

export default function Home() {
  return (
    <div className="App">
      <AuthenticatedPage>
        <Homepage />
      </AuthenticatedPage>
    </div>
  );
}
