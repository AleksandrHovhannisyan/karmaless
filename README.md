<h1><img src="https://github.com/AleksandrHovhannisyan/karmaless/blob/master/icons/icon-38.png" style="float:left;" alt="The karmaless logo">karmaless</h1>

> A karma-free Reddit experience

**Note**: Karmaless only works on the old Reddit interface ([https://old.reddit.com/](https://old.reddit.com/)).

### What Does Karmaless Do?

Karmaless is a Chrome extension that hides karma on Reddit, allowing you to focus on what matters most: reading (and posting) content, without worrying about how people react or how well your post is received.

<br/>
<img src="https://user-images.githubusercontent.com/19352442/91773781-6ab3d600-ebb5-11ea-8966-10a56ba9ac64.png" alt="Reddit's old interface, without karma">
<br/>

This extension is purely cosmetic; it won't change Reddit's mechanics or scoring, so posts toward the top are naturally going to be rated higher. The goal is to eliminate your fixation on karma and to create a more healthy browsing (and posting) experience that isn't biased by karma.

### How It Works

Each time you navigate to a Reddit URL or expand comments, the extension will briefly blur the page, remove any elements that have traces of karma according to your preferences, and then make the page visible again. You can disable any settings that you don't like under the extension's settings page:

![The Karmaless extension settings page](https://user-images.githubusercontent.com/19352442/92305913-99d19b00-ef59-11ea-8089-926e6cf0e95c.png)

To access the settings page:

1. Go to `chrome://extensions`.
2. Click `Details` under the Karmaless extension.
3. Scroll down and click `Extension options`.

### Contributing

Contributions are welcome! Please submit an issue if you find a bug or would like to request a new feature.

#### Running the Extension

To run the extension locally:

1. Clone this repository and run `yarn start`. Webpack will generate a `dist/` folder for the extension.
2. Visit `chrome://extensions` and click `Load Unpacked` (make sure `Developer mode` is turned on).
3. Select the `dist/` folder.

Then, just navigate to any Reddit URL on the old interface.

#### Workflow

Current iterations of work ("sprints") get pulled into the `dev` branch.

Releases are eventually merged into `master`.

#### Project Structure

The `src` folder has the following hierarchy:

```
src
├── constants
│   └── ...
├── content
│   └── ...
├── options
│   ├── ...
├── store
│   ├── ...
└── utils
    ├── ...
```

- `constants`: constant/enum/object exports.
- `content`: all files related to the extension's [content script](https://developer.chrome.com/extensions/content_scripts).
- `options`: all files related to the extension's [options page](https://developer.chrome.com/extensions/options).
- `store`: modules related to storing and reading settings using browser extension APIs.
- `utils`: utility functions and helpers to make things easier.
