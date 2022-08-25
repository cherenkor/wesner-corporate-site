// Use type safe message keys with `next-intl`
type Shared = typeof import('locales/en/shared.json');
type HomePage = typeof import('locales/en/pages/home.json');
type CompanyPage = typeof import('locales/en/pages/company.json');
type Custom404 = typeof import('locales/en/pages/404.json');
type Services = typeof import('locales/en/pages/services.json');
type Careers = typeof import('locales/en/pages/careers.json');

type Messages = Shared &
  HomePage &
  Custom404 &
  CompanyPage &
  Services &
  Careers;

declare interface IntlMessages extends Messages {}
