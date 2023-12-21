import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3">
      <div>
        Powered by{' '}
        <a
          href="https://mistral.ai/news/mixtral-of-experts"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          Mixtral{' '}
        </a>
        and{' '}
        <a
          href="https://platform.openai.com/docs/models"
          target="_blank"
          rel="noreferrer"
          className="font-bold hover:underline transition underline-offset-2"
        >
          GPT-3.5
        </a>
      </div>
      <div className="flex space-x-4 pb-4 sm:pb-0">
      <Link
        href="https://www.linkedin.com/company/petionship"
        target="_blank"
        rel="noreferrer"
        className="group"
        aria-label="Petionship on LinkedIn"
      >
        <svg
          aria-hidden="true"
          className="h-7 w-7 fill-slate-500 group-hover:fill-slate-700"
          viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
        </svg>
      </Link>

        <Link
          href="mailto:petos@petionship.com"
          target="_blank"
          rel="noreferrer"
          className="group"
          aria-label="Email PetOS"
        >
          <svg
            aria-hidden="true"
            className="h-7 w-7 fill-slate-500 group-hover:fill-slate-700"
            viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"/>
          </svg>
        </Link>
      </div>
    </footer>
  );
}
