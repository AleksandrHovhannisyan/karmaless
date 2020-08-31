<h1><img src="https://github.com/AleksandrHovhannisyan/karmaless/blob/master/icons/icon-38.png" style="float:left;" alt="The karmaless logo">karmaless</h1>

> A karma-free Reddit experience

**Note**: Karmaless only works on the old Reddit interface ([https://old.reddit.com/](https://old.reddit.com/)).

### What Does Karmaless Do?

Karmaless purges all traces of karma from your Reddit browsing experience, allowing you to focus on what matters most: reading (and posting) content, without worrying about how people react or how well your post is received.

![Reddit's old interface, without karma](https://user-images.githubusercontent.com/19352442/91773781-6ab3d600-ebb5-11ea-8966-10a56ba9ac64.png)

Obviously, this extension doesn't change Reddit's platform and scoring, so posts toward the top are naturally going to be rated higher. The goal here is to eliminate your fixation on karma and to create a more healthy browsing (and posting) experience that isn't biased by karma.

### How It Works

Each time you navigate to a Reddit URL, the extension will briefly obfuscate/blur the page, remove any elements that have traces of karma, and then make the page visible again. You can disable any settings that you don't like under the extension's settings page:

![The Karmaless extension settings page](https://user-images.githubusercontent.com/19352442/91771426-fb3be780-ebb0-11ea-9bc1-f59ddfbb15b1.png)

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

#### Code Hierarchy

The `src` folder has the following hierarchy:

```
src
├── constants
│   ├── defaultSettings.js
│   └── settings.js
├── content
│   └── content.js
├── options
│   ├── options.html
│   ├── options.js
│   └── styles.css
└── utils
    ├── readSetting.js
    ├── updateCheckbox.js
    └── writeSetting.js
```

- `constants`: constant/enum/object exports.
- `content`: all files related to the extension's [content script](https://developer.chrome.com/extensions/content_scripts).
- `options`: all files related to the extension's [options page](https://developer.chrome.com/extensions/options).
- `utils`: utility functions and helpers to make things easier.
