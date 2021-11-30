# Quote Delight

[![Build status](https://build.appcenter.ms/v0.1/apps/0ff97df9-4b3c-45c3-ab48-a00f8f2eecb4/branches/release/badge)](https://appcenter.ms)

## Deep linking

domain prefix's supported:

- [https://samer-j.github.io/quote-delight](https://samer-j.github.io/quote-delight/app)
- [quote-delight://app](quote-delight://app)

paths:

- [/quotes/5](quote-delight://app/quotes/5) : opens home screen (quotes carousal) with quote of given id
- [/list-all](quote-delight://app/list-all) : opens listing page with all quotes
- [/settings](quote-delight://app/settings) : opens settings page

How to test?

- `npx uri-scheme open quote-delight://app/settings --android`
- `npx uri-scheme open https://sameer-j.github.io/quote-delight/settings --android`
