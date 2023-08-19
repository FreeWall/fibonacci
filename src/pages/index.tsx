import FibonacciForm from '@/components/fibonacciForm';
import getConfig from 'next/config';
import { FaGithub } from 'react-icons/fa';

const { publicRuntimeConfig } = getConfig();

export default function Index() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="absolute top-0 right-0">
        <a
          href={publicRuntimeConfig?.repository}
          target="_blank"
          className="text-body hover:text-white p-6 sm:p-10 inline-block"
        >
          <FaGithub className="w-7 h-7 sm:w-8 sm:h-8" />
        </a>
      </div>
      <div className="p-6 sm:p-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
          <i>n</i>th Fibonacci number
        </h1>
        <FibonacciForm />
      </div>
    </div>
  );
}
