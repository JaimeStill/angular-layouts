# Theme Structure and Generated Style Optimization

The [theme](../theme/) directory contains all of the global app styles. As features were added to these files, the bundle size they were generating when building an application was getting bloated and hard to manage.

The following sections provide changes that were made to the file structure, as well as strategies for optimizing the avaiable styles without sacrificing functionality.

## File Structure

* [color.scss](../theme/color.scss) - Previously `styles.scss`, this file is responsible for applying theme-based color styles (derived from [palette.scss](../theme/palette.scss)) via the `style-theme` mixin, as well as calling the `style-glow` and `style-snacker` mixins.

* [flex.scss](../theme/flex.scss) - Provides utility classes for composing CSS Flexbox layouts.

* [glow.scss](../theme/glow.scss) - Defines the `style-glow` mixin, which extends the `mat.elevation` feature by allowing for shaded elevations based on all of the colors defined by [palette.scss](../theme/palette.scss).

* [layout.scss](../theme/layout.scss) - Defines global styles needed to facilitate a proper [root app layout](./root-layout.md).

* [material.scss](../theme/material.scss) - Provides extended styles for [Material](https://material.angular.io/components/categories) components.

* [palette.scss](../theme/palette.scss) - Defines theme colors for both light and dark mode, as well as functions for extracting palette values.

* [snacker.scss](../theme/snacker.scss) - Defines the `style-snacker` mixin for allowing extended palette colors when rendering a [Material Snackbar](https://material.angular.io/components/snack-bar/overview) via the [SnackerService](../src/app/services/core/snacker.service.ts).

* [theme.scss](../theme/theme.scss) - The root app theme style sheet following the guidelines in the [Theming Angular Material](https://material.angular.io/guide/theming) guide.

* [utility.scss](../theme/utility.scss) - Provides classes for setting commonly used styles (i.e. - rounded borders, margins, paddings, cursor styles, etc.).

## Generated Style Optimization

[glow.scss](../theme/glow.scss#L7) and [utility.scss](../theme/utility.scss#L81) previously iterated over a sequence of numbers in a for loop to generate style classes. The iteration ran between 0 - 24, and generated a style for each number in the sequence.

Realistically, these styles could be improved by trimming the range down to 0 - 16, and only provided values for factors of two. This can be done by iterating through 0 - 8, and multipyling the current iteration by 2:

```scss
@for $index from 0 through 8 {
    $i: $index * 2;

    // .p0, .p2, ...,.p16
    .p#{$i} {
        padding: #{$i}px !important;
    }
}
```
