# SpaceX Search

This project makes use of react alongside graphql to query the spaceX api.

## Usage

To clone this repository, head over to your projects folder and run:

```bash
git clone git@github.com:sammyyOzz/spacex-launches.git
cd spacex-launches
npm install
```

When its done, open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Decisions

Upon querying the api, it returns a long list of items. Rendering all of these at once has an impact on the performance of the browser and can even cause it to crash, this is also expensive because it returns unnecessary results which the user may not need. This is easily solved by pagination of the results returned. 
An alternative to pagination is to use a virtualized list whereby only the items visible to the user are rendered by the browser.

The component responsible for rendering the long list of items ("list-launches.component.tsx") has been memoized with React.memo, this is important  for performance because it prevents unnecessary rerendering of its children.

Images being rendered are loaded lazily with a custom component and this optimizes performance especially for long lists.

Components are kept small and simple. This ensures they handle a single task perfectly well and makes them reusable.

Reusable state logic is handled with custom hooks to prevent duplicated code.

### Note

Due to the limitations of the api, searches made using the search input can only be conducted within one field at a time, the desired field to search through can be chosen with the select component which is labelled 'search by'.

The api does not return the total count of results from a query and this is required for proper pagination logic. This is something that can be worked on when using a proper api.