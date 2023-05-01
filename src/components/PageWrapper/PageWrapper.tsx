import { type ReactNode } from 'react';

import { tw } from '../../utils/tailwind.utils';

type Props = {
  children: ReactNode;
};
function PageWrapper({ children }: Props) {
  return (
    <main
      className={tw(
        `flex min-h-screen flex-col items-center justify-start bg-gradient-to-b from-[#2e026d] to-[#15162c]`
      )}
    >
      <header
        className={tw(
          'mr-2 flex justify-center self-end p-1 text-xl font-light text-violet-500'
        )}
      >
        {'rps.'}
        <span className={tw('text-violet-600')}>quest</span>
      </header>
      <article
        className={tw(`flex flex-1 flex-col items-center justify-center`)}
      >
        {children}
      </article>
    </main>
  );
}

export default PageWrapper;
