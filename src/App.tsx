import { formatDistanceToNow } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";

const searchParamsSchema = z.object({
  date: z.coerce.date(),
  title: z.string().optional(),
});

function App() {
  const [searchParams] = useSearchParams();
  const { date, title } = searchParamsSchema.parse(
    Object.fromEntries(searchParams)
  );
  const distance = formatDistanceToNow(date, { addSuffix: true });

  return (
    <div className="app">
      <div>
        {title && <h1>{title}</h1>}
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default App;
