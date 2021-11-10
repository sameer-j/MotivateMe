# Quote Delight

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
