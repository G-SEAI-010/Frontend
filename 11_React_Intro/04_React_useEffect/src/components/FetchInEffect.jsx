import { useEffect, useState } from 'react';

const FetchInEffect = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
          signal: controller.signal,
        });

        if (!res.ok) {
          throw new Error('Abruf fehlgeschlagen');
        }

        const data = await res.json();
        setTodos(data);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => controller.abort();
  }, []);

  return (
    <div>
      {loading && <p>Lädt...</p>}

      {todos.map((item) => (
        <article key={item.id}>
          <h2>
            {item.title} <span>{item.completed ? '✅' : '❌'}</span>
          </h2>
        </article>
      ))}
    </div>
  );
};
export default FetchInEffect;
