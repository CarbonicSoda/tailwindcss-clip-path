This plugin provides _[clip-path](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path)_ utilities for TailwindCSS v4.0+.

### Installation

Install this plugin in your project:

```bash
# via npm
npm add -D tailwindcss-clip-path

# or pnpm
pnpm add -D tailwindcss-clip-path

# or yarn etc
```

Import the plugin:

```css
/* index.css */
@import "tailwindcss";
/* other imports */
@import "tailwindcss-clip-path";
```

### Utilities

The utilities provided by this plugin are of the form `cp-*`.

#### Keyword

| Class     | Property            |
| --------- | ------------------- |
| _cp-none_ | clip-path: **none** |

#### Global

| Class             | Property                    |
| ----------------- | --------------------------- |
| _cp-initial_      | clip-path: **initial**      |
| _cp-inherit_      | clip-path: **inherit**      |
| _cp-unset_        | clip-path: **unset**        |
| _cp-revert_       | clip-path: **revert**       |
| _cp-revert-layer_ | clip-path: **revert-layer** |

#### Clip Source

| Class              | Property           | Example                                |
| ------------------ | ------------------ | -------------------------------------- |
| _cp-url-[__url__]_ | clip-path: **url** | _cp-url-[__url(/masks/example.svg)__]_ |

> Refer to [Clip Source](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path#clip-source) for property details.

#### Geometry Box

| Class        | Property                   |
| ------------ | -------------------------- |
| _cp-margin_  | clip-path: **margin-box**  |
| _cp-border_  | clip-path: **border-box**  |
| _cp-padding_ | clip-path: **padding-box** |
| _cp-content_ | clip-path: **content-box** |
| _cp-fill_    | clip-path: **fill-box**    |
| _cp-stroke_  | clip-path: **stroke-box**  |
| _cp-view_    | clip-path: **view-box**    |

> Refer to [Geometry Box](https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path#geometry-box) for property details.

#### Basic Shape

| Class                    | Property                        | Example                                                      |
| ------------------------ | ------------------------------- | ------------------------------------------------------------ |
| _cp-inset-[__value__]_   | clip-path: **inset( value )**   | _cp-inset-[__100px_50px__]_                                  |
| _cp-circle-[__value__]_  | clip-path: **circle( value )**  | _cp-circle-[__50px_at_0_100px__]_                            |
| _cp-ellipse-[__value__]_ | clip-path: **ellipse( value )** | _cp-ellipse-[__50px_60px_at_10%_20%__]_                      |
| _cp-polygon-[__value__]_ | clip-path: **polygon( value )** | _cp-polygon-[__10%_0,_80%_20%,_50%_0,_0_50%__]_              |
| _cp-path-[__value__]_    | clip-path: **path( value )**    | _cp-path-[__"M.5\_1C.5\_1\_0\_.7*0*.3A.25.25*0\_11.5.3Z"__]_ |
| _cp-rect-[__value__]_    | clip-path: **rect( value )**    | _cp-rect-[__5px_5px_160px_145px_round_20%__]_                |
| _cp-shape-[__value__]_   | clip-path: **shape( value )**   | _cp-shape-[__nonzero\_from\_0\_0,\_line\_to\_10px\_10px__]_  |
| _cp-xywh-[__value__]_    | clip-path: **xywh( value )**    | _cp-xywh-[__0\_5px\_100%\_75%\_round\_15%\_0__]_             |

> Refer to [Basic Shape](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape) for property details.

> Note that spaces are not allowed in `[]` and must be replaced with `_`.  
> e.g. `cp-inset-[25% 10%]` should be `cp-inset-[25%_10%]` instead.
