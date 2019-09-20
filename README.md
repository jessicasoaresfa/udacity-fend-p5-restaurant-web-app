# Project Overview

For the  **Restaurant Reviews**  project, part of **Udacity**'s **Front-End Web Developer Nanodegree** program, the mission was to incrementally convert a static webpage to a mobile-ready web application. 


## Steps to complete the project

#### Starter Project
> link  [https://github.com/udacity/mws-restaurant-stage-1](https://github.com/udacity/mws-restaurant-stage-1)

1.**Responsive Design**

- All content is responsive and displays on a range of display sizes.
- Content should make use of available screen real estate and should display correctly at all screen sizes.
- An image's associated title and text renders next to the image in all viewport sizes.
- Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.
- On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

2. **Accessibility**
- All content-related images include appropriate alternate text that clearly describes the content of the image.
- Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.
- Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate  `ARIA roles`  are defined.

3. **Offline Availability**
- When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access.

#### External libraries Used

-   Normalize.css
-   [leafletjs](https://leafletjs.com/)  with  [Mapbox](https://www.mapbox.com/)

## To run application
To run it on your terminal:
- Download or clone the repository
- In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.
			> in a terminal, check the version of Python you have: python -V.
			> if you have Python 2.x, spin up the server with: Python 2: python -m SimpleHTTPServer 8000
			> for Python 3.x, use: python3 -m http.server 8000.
- Visit the site in your browser at http://localhost:8000

