import { fibonacciIndexLimit } from '@/utils/fibonacci';
import { trpc } from '@/utils/trpc';
import { useRef, useState } from 'react';

export default function Index() {
  const [index, setIndex] = useState<number>();
  const indexInput = useRef<HTMLInputElement>(null);

  const { data, error } = trpc.fibonacci.numberAt.useQuery(index ?? 0, {
    enabled: index !== undefined,
  });

  function submit() {
    const value = indexInput?.current?.value.trim();
    if (!value) {
      return;
    }

    if (!/^\d+$/.test(value)) {
      return;
    }

    setIndex(Number(value));
  }

  return (
    <div>
      <input
        ref={indexInput}
        type="text"
        placeholder={`0-${fibonacciIndexLimit}`}
        maxLength={fibonacciIndexLimit.toString().length}
        onKeyDown={(e) => e.key == 'Enter' && submit()}
        className="border border-gray-400 p-2 rounded"
      />
      <button onClick={() => submit()}>Calculate</button>
      {data?.number && <div>{data?.number}</div>}
      {error && <div>{error.message}</div>}
    </div>
  );

  return <>{data?.number}</>;
}
