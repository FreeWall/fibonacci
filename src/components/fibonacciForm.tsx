import { fibonacciIndexLimit } from '@/utils/fibonacci';
import { trpc } from '@/utils/trpc';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { CgSpinner } from 'react-icons/cg';

export default function FibonacciForm() {
  const [index, setIndex] = useState<number>();

  const indexInput = useRef<HTMLInputElement>(null);
  const [inputError, setInputError] = useState(false);

  const { data, error, isInitialLoading, isRefetching } =
    trpc.fibonacci.numberAt.useQuery(index ?? 0, {
      enabled: index !== undefined,
    });

  const isLoading = isInitialLoading || isRefetching;

  function submit() {
    const value = indexInput?.current?.value.trim();
    if (!value) {
      indexInput.current?.focus();
      setInputError(false);
      return;
    }

    if (!/^\d+$/.test(value)) {
      setInputError(true);
      return;
    }

    setInputError(false);
    setIndex(Number(value));
  }

  return (
    <div className="w-full">
      <div className="mb-8 flex">
        <input
          ref={indexInput}
          type="text"
          placeholder={`0-${fibonacciIndexLimit}`}
          maxLength={fibonacciIndexLimit.toString().length}
          onKeyDown={(e) => e.key == 'Enter' && submit()}
          className={classNames(
            'bg-lighter p-4 mr-4 text-xl w-[140px] border border-lighter rounded outline-none font-semibold placeholder:text-[#858688]',
            {
              'border-red-500': inputError,
            },
          )}
        />
        <div className="flex items-center">
          <button
            onClick={() => submit()}
            className={classNames(
              'bg-conversion hover:bg-conversionHover border-conversion hover:border-conversionHover p-4 text-white text-lg font-bold px-4 flex items-center rounded relative transition-[padding] duration-300',
              {
                'pointer-events-none opacity-70 bg-conversionHover pr-12':
                  isLoading,
              },
            )}
          >
            Calculate
            <CgSpinner
              className={classNames(
                'animate-spin text-body absolute right-4 transition-[opacity] duration-300',
                {
                  'opacity-100': isLoading,
                  'opacity-0': !isLoading,
                },
              )}
              size={24}
            />
          </button>
        </div>
      </div>
      <div className="w-full inline-block">
        {data?.number && (
          <div
            className={classNames(
              'bg-darker inline-block max-w-full p-4 rounded break-words',
              {
                'text-sm': data?.number.length > 3000,
                'text-xs': data?.number.length > 6000,
              },
            )}
          >
            {data?.number}
          </div>
        )}
        {error && <div className="text-red-600">{error.message}</div>}
      </div>
    </div>
  );
}
