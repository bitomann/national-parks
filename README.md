# National Parks

## Setup

1. Clone down this repo.
1. `cd` into the repo.
1. Change the remote origin of this repo with the following steps:
    1. Run the following command in national parks directory: `rm -rf .git` 
    1. Go to your Github account and create a new repo.
    1. In your national parks directory, do the following:
        1. `git init`
        1. `git add .`
        1. `git commit -m "National parks starter code"`
        1. `git remote add origin [URL of the repo you just created on Github]`
        1. `git push -u origin master`

        You are now ready to checkout a branch and start coding.

1. You will be using json-server to have a locally running API that serves your data. To run json-server from command line: 
    1. `cd` into the `api` directory
    1. Run `json-server -w database.json -p 8088`

    Go to `localhost:8088/parks` to see your data.

1. You will also need to use http-server:
    1. `cd` into the `src` directory
    1. Run `http-server`

## A List of National Parks

### MVP

Build an application that gets data about national parks from your json-server API and displays the list of national parks on the DOM. Each national park should be formatted in HTML like below:

```html
<article>
    <h3>Park Name</h3>
    <p>State the park in located in</p>
</article>
```
If the park has been visited, the article tag should have a red dashed border. If the park has not been visited, it should have a green solid border.

### Stretch Goal

For each of the national parks, use the latitude and longitude to get the weather in that area using this API: https://darksky.net/dev. From the data coming back from the Dark Sky API, you are going to use `summary` listed under `currently`, `hourly` and `daily`. Change the html so it looks like this:

```html
<article>
    <h3>Park Name</h3>
    <p>State the park</p>
    <p>Weather:</p>
    <ul>
    <li>Currently: Summary from currently in API Data</li>
    <li>Today: Summary from hourly in API Data</li>
    <li>Week: Summary from daily in API Data</li>
    </ul>
</article>
```

If you encounter CORS issues with the Dark Sky API, you can add this to the front of you URL: `https://cors-anywhere.herokuapp.com/`
