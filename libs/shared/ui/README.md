# UI

This library is an abstraction wrapper around MUI.

It should contain only simple markup of selected Material components to hide the
underlying implementations.

This is indented to allow us to change from this design system in a potentially
slightly easier fashion if that is ever required.

## Running unit tests

Run `nx test shared-ui` to execute the unit tests via [Jest](https://jestjs.io).

## Running stories

Run `nx storybook shared-ui` from the root folder

## TODO: collecting coverage:

Something like this?

```
"test-storybook -c libs/shared/ui/.storybook --url=http:localhost:6006 --coverage",
"mv coverage/storybook/coverage-storybook.json coveragshared-ui.json"

```
