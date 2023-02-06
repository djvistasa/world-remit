# rn-code-interview-test

## Approach

Because I had two hours, I decided to make use of one of my boilerplates so as to speed up plumbing. I leveraged a tool called Plopjs to scaffold screens and components.

I also decided to start with the API and Hook layers as those would take up the least time. I wanted it such that by the time I tackle the most time consuming step, which is theming, my template would have access to live BE data and or any operations that needed to be performed on it. i.e follow, unfollow logic.

I decided not to write any tests as that would have take time away from my themeing and would have resulted in a "less functional" solution. I made sure to keep them in mind with each new component I created so that we could at any stage of the project lifespan, decide to write them.

### Nice to haves I left out because of time

- Persist logic (Would have been nice to have the app remember who you blocked or follow)
- Load more on scroll end (I noticed that the api allows for pagination, would have been nice to fetch more users when user reaches bottom of scroll)
- Caching of requests (WOuld have been nice to cache the responses from the API by using something like react-query)
- Loading state (Would have been nice to show loader whenever the app interacts with the BE)
- General UI tweaks (Could have used icons for the block and unfollow. Could have also implemented the slide to reveal actions functionality on iOS)
