# Aspire - Email "To Field"

- Create the "To" field in an email: include validations, styling

### Things I Would Add If I Had More Time

- 'Enter' and ',' on the keyboard works currently to add emails, but I would add 'Backspace'/'Delete' to delete an entered email
- Add a check to not display the email list background if there was nothing matching the typed input
- Import an x and ! icon instead of using the characters 'x' and '!'
- Make the invalid inputs red on hover instead of gray
- Add responsiveness for mobile
- Add css for cross browser compatibility
- Change cursor to the right cursor when hovering over the list of emails

### Things I Did Change

- Used .includes() for search instead of .startsWith() to include all search results, instead of only displaying results that start with the input letter(s)
- I made the input expand vertically instead of having to scroll horizontally when the email list is wider than the input width so that the user can easily see all the inputted emails
- I made the input wider than the image shown so that more emails can be added before it starts going to the next line

### UX Suggestions

- For the initial state of added emails, it's a little out of user norm for the email tag to not be outlined/coloured. I see that it's bolded but it's still pretty different from what users are used to - bold usually means important but in this case the meaning is a bit lost. It's not really until I hover over a valid email or add another email that I know for sure it was successfully added. Moreover, because the x only shows up on hover, that means that the added emails would shift every time someone hovers over an added email that is not the most recently added one. Or when the input width is long enough for a new input but on hover it isn't, that would also cause a shift to a new line, such that when the mouse stops hovering that item, the line would disappear. I would suggest to make the intial added state more obvious such as include a non disappearing x/outline/colored etc. so that users don't have to try to figure out what they are already supposed know, and don't have to see a shift on every hover.
- For inputs that are invalid as emails, it may be helpful to include the reason in text - eg. "The email was already added". This helps the user know immediately without guessing as to why their input did not work/is considered invalid

## Other Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
