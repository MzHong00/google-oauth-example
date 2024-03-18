import { useEffect, useState } from "react";
import { fetchGoogleOauth } from "./api/googleOauth";

function App() {
  const [url, setUrl] = useState();
  useEffect(() => {
    const form = async () => {
      const link = await fetchGoogleOauth();
      setUrl(link);
    }
    form();
  }, []);

  return (
    <div className="App">{url}</div>
  );
}

export default App;
