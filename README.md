# Yonder Experiences

This is a simple app to visualise the value per points for different experiences through the Yonder credit card

## Tools

- Next.js 15
- Tailwind
- shadcn/ui
- recharts
- ultracite

## Contributing

Feel free to contribute to this repo by forking your own version and creating a pull request back into this one, happy to accept updates for data or any other improvements

_Updating data_

The data for the experiences is located in `lib/experiences.ts`, since all of the yonder data is just inside of the app, the easiest way I found to populate the data was to use the Mac Screen Mirror app to load the Yonder app which I can take screenshots of in the app, using cursor cmd+k and pasting a screenshot of the experience data with the prompt `add` is usually enough thanks to the `experiences.mdc` cursor rule
