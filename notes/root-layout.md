# Root Layout

The intent of this feature effort is to simplify the layout of an app with a top toolbar and a routable content region rendered below it. One of the largest hurdles I had previously not been able to quite figure out was a strategy for creating layouts with predictable scroll regions.

The following layout configuration leverages CSS Grid to provide predictable overflow contexts.

## [Base Layout Styles](../theme/layout.scss)

```scss
* {
    box-sizing: border-box;
}

body {
    height: 100vh;
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: Roboto, "Helvetica Neue", sans-serif;
}

.full-height {
    height: 100%;
}
```

In the above configuration, what is primarily important is that the body height is set to the height of the viewport, and overflow is globally set to hidden. This allows child containers defined within a Grid to use the [`overflow`](../theme/utility.scss#L37) class to indicate it is a scroll container.

## [App Component](../src/app/)

> The code snippets below omit code that is not relevant to illustrating the layout strategy

```html
<div class="grid full-height mat-typography mat-app-background">
    <mat-toolbar><!-- children --></mat-toolbar>
    <div class="overflow">
        <router-outlet></router-outlet>
    </div>
</div>
```

```scss
div.grid {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
}
```

Here, the root `<div>` in AppComponent is setup as a Grid with two rows, an `auto` row for the toolbar, and a `minmax(0, 1fr)` row for the routable content region. It is also styled with `full-height` so it fills in the available space in the `<body>`.


Because `auto` can be used for the first row, a media query is no longer needed to react to the responsive resizing of the toolbar when the screen size changes.

The second row wraps `<router-outlet>` in a `<div>` configured as a scroll container. If any of the contents rendered in this section overflow, this `<div>` will provide the scrolling context:

![image](https://user-images.githubusercontent.com/14102723/200037136-2575b2a8-97c0-485a-8639-ac262cba7876.png)

This is a great start, but notice how the scrollbar includes the nav tabs in the rendered route? This can easily be fixed by appropriately configuring the child to provide its own scrolling context.

## [Child Route Scrolling](../src/app/routes/layout/)

```html
<div class="grid full-height">
    <nav mat-tab-nav-bar>
        <!-- tabs -->
    </nav>
    <div class="overflow">
        <router-outlet></router-outlet>
    </div>
</div>
```

```scss
div.grid {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr);
}
```

Just as with AppComponent above, the route's root `<div>` is made a Grid and renders the nav tabs in a first row sized with `auto`. The second row wraps the `<router-outlet>` in a `<div>` configured as an overflow container. Now, when overflow occurs, the contents in this div will capture the scrolling context before the parent overflow container:

![image](https://user-images.githubusercontent.com/14102723/200038411-32ccd641-6f8a-470d-9d98-be5c67db229d.png)
