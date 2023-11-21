##About The Project
This is test assessment 
## Installation
```bash
npm run dev
# or
yarn dev
```
## Build
```bash
npm run build
# or
yarn build
```
##
#### 1. How did you decide on the technical and architectural choices used as part of your solution ?

- Should be the latest stable version to up-to-date with daily improvement.

- Code quality check to persist code style.

- Two types of components to the best reuse:

  - Presentational component: for displaying only purpose.

  - Container component: handling side effects for presentational component.

#### 2. Are there any improvements you could make to your submission?

- Small and decoupling components -> For example: `ComicsCarousel` component on home page, this inherits from `HomeCarousel` -> `ArrowCarousel` -> `Carousel`.

- Development part:

    - `husky`: quality check before committing.

    - `lint-staged`: combine with husky for checking only changed files -> this will make the process quicker.

    - Some other eslint rules: for enhancing code quality

#### 3. What would you do differently if you were allocated more time?

- Adding Unit test / UI test / Integration test.

- Turn page into server side rendering to optimizing search engine.

- If our page large, we can consider to use state management: redux, mobx, react context for avoid hell props passing and better maintenance

- UX improvements

#### 4. What considerations are there if this was a production app?

- SSR for better SEO

- UX improvements: Loading state with skeleton, hover state for button, transition...



