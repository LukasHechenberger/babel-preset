# @ls-age/babel-preset

> Babel preset used by ls-age

## Install

```sh
npm install --save-dev @ls-age/babel-preset
```

## Usage

### Via `.babelrc` / "babel" field in `package.json` (Recommended)

```json
{
  "presets": ["@ls-age/babel-preset"]
}
```

### Via CLI

```sh
babel script.js --presets @ls-age/babel-preset
```

### Via Node API

```javascript
require("@babel/core").transform("code", {
  presets: ["@ls-age/babel-preset"]
});
```

## Options

Options passed to the prefix can be a string or an object. When a string is given it is assumed to be the `target` option. Therefore

```json
{
  "presets": [
    ["@ls-age/babel-preset", "browser"]
  ]
}
```

equals

```json
{
  "presets": [
    ["@ls-age/babel-preset", { "target": "browser" }]
  ]
}
```

### `target`

`"node" | "browser"`, defaults to `"node"`
