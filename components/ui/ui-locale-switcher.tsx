import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

export const LocaleSwitcher = () => {
  const { locales, route, locale } = useRouter();

  return (
    <div className="wrapper">
      {(locales || []).map((l) => (
        <Link key={l} href={route} locale={l}>
          <a className={cn({ active: locale === l })}>{l}</a>
        </Link>
      ))}
      <style jsx>{`
        .wrapper {
          margin: 24px;
        }

        a {
          border: 1px solid #eaeaea;
          border-radius: 12px;
          padding: 8px 12px;
          margin-right: 12px;
        }

        a.active {
          background: #c3b2f3;
        }
      `}</style>
    </div>
  );
};
