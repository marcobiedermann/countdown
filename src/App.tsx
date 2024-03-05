import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const searchParamsSchema = z.object({
  date: z.coerce.date(),
});

function App() {
  const [searchParams] = useSearchParams();
  const { date } = searchParamsSchema.parse(Object.fromEntries(searchParams));

  return (
    <div>
      <h1>{date.toDateString()}</h1>
    </div>
  );
}

export default App;
