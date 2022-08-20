// Use type safe message keys with `next-intl`
type Shared = typeof import('locales/en/shared.json');
type HomePage = typeof import('locales/en/pages/home.json');

type Messages = Shared & HomePage;

declare interface IntlMessages extends Messages {}
