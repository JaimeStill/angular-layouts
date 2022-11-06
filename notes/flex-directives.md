# Flex Directives

* [Overview](#overview)
* [FlexContainer](#flexcontainer)
* [FlexChild](#flexchild)
* [Flex Types](#flex-types)

https://jaimestill.github.io/angular-layouts/layouts/flex-directives

![image](https://user-images.githubusercontent.com/14102723/200196032-6773a389-b84c-4a79-adab-749636eec7a9.png)

> To quickly see a layout using the Flex directives, see:
> * [flex-directive.route.ts](../src/app/routes/layout/children/flex-directives.route.ts)
> * [flex-directive.route.html](../src/app/routes/layout/children/flex-directives.route.html)
> * [flex-directive.route.scss](../src/app/routes/layout/children/flex-directives.route.scss)  

## Overview
[Back to Top](#flex-directives)

The flex utility styles described in [flex-styles.md](./flex-styles.md) are okay to work with for creating simple flex layouts, but element classes can quickly get too large. Just look at the class list for this div element:

```html
<div class="fx fx-flex fx-row fx-wrap fx-jc-flex-start fx-ai-center background-card m4 p4 rounded card-outline-divider">
    <!-- content -->
</div>
```

Additionally, the ability to make flex options configurable isn't as simple, particularly when having to keep track of classes that perform additional styling. This creates a pretty solid rule when determining how to style an element:

* Styles that are static to the element can be provided through CSS classes.

* Styles that are dynamic / configurable should be applied through attribute directives.

With this in mind, the infrastructure that follows was created to facilitate the application of configurable flex layouts.

## [FlexContainer](../src/app/directives/flex/flex-container.directive.ts)
[Back to Top](#flex-directives)

The `flexContainer` directive applies `display: flex` to the element the attribute is applied to, and has several properties available for configuring the container.

Property | Type | CSS Property | Default Value
---------|------|--------------|--------------
`flexAlign` | [FxAlign](../src/app/types/flex/fx-align.ts) | [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content) | `normal`
`flexCross` | [FxCross](../src/app/types/flex/fx-cross.ts) | [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | `normal`
`flexDirection` | [`FxDirection`](../src/app/types/flex/fx-direction.ts) | [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction) | `row`
`flexGap` | `string` | [gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap) | `normal`
`flexMain` | [FxMain](../src/app/types/flex/fx-main.ts) | [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content) | `normal`
`flexWrap` | [FxWrap](../src/app/types/flex/fx-wrap.ts) | [flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap) | `nowrap`

### Example

```html
<div flexContainer
     flexDirection="column"
     flexMain="space-between"
     flexCross="stretch"
     flexGap="4px"
     flexWrap="wrap">
    <!-- content -->
</div>
```

## [FlexChild](../src/app/directives/flex/flex-child.directive.ts)
[Back to Top](#flex-directives)

The `flexChild` directive allows you to set per-child configuration options for an item within a flex container.

Property | Type | CSS Property | Default Value
---------|------|--------------|--------------
`flexAlignSelf` | [FxAlignSelf](../src/app/types/flex/fx-align-self.ts) | [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) | `auto`
`flex` | `string` | [flex](https://developer.mozilla.org/en-US/docs/Web/CSS/flex) | `1 1 auto`
`canFlex` | `boolean` | N/A | `true`

### Example

```html
<!-- flex container -->
<div flexChild
     flex="1 1 360px">
</div>
<!-- /flex container -->
```

## [Flex Types](../src/app/types/flex/)
[Back to Top](#flex-directives)

An important consideration when building out the directives was to keep the options as closely aligned with the CSS specification as possible.

Where a CSS property has a set of available options, those options are made available as a static array within [FlexTypeValues](../src/app/types/flex/flex-type-values.ts). The array values are then used to create literal types, for instance [FxAlign](../src/app/types/flex/fx-align.ts).

This approach was taken so that the values behind the literal types could be iterable and exposed as options through UI elements such as a select list.

The types, their CSS counterpart, and their available options are defined below.

### [FxAlign](../src/app/types/flex/fx-align.ts)

**Applies To**: Container

**Flex Type Values**: [fxAlign](../src/app/types/flex/flex-type-values.ts#L2)

**CSS Type**: [`align-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)

**Default Value**: `stretch`

**Values**:

* `baseline`
* `center`
* `end`,
* `flex-end`
* `flex-start`
* `normal`
* `space-around`
* `space-between`
* `space-evenly`
* `start`
* `stretch`

### [FxAlignSelf](../src/app/types/flex/fx-align-self.ts)

**Applies To**: Child

**Flex Type Values**: [fxAlignSelf](../src/app/types/flex/flex-type-values.ts#L16)

**CSS Type**: [`align-self`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)

**Default Value**: `auto`

**Values**:

* `auto`
* `baseline`
* `center`
* `end`
* `flex-end`
* `flex-start`
* `self-end`
* `self-start`
* `start`
* `stretch`

### [FxCross](../src/app/types/flex/fx-cross.ts)

**Applies To**: Container

**Flex Type Values**: [fxCross](../src/app/types/flex/flex-type-values.ts#L29)

**CSS Type**: [`align-items`](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)

**Default Value**: `normal`

**Values**:

* `baseline`
* `center`
* `end`
* `flex-end`
* `flex-start`
* `normal`
* `start`
* `stretch`

### [FxDirection](../src/app/types/flex/fx-direction.ts)

**Applies To**: Container

**Flex Type Values**: [fxDirection](../src/app/types/flex/flex-type-values.ts#L40)

**CSS Type**: [`flex-direction`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)

**Default Value**: `row`

**Values**:

* `column`
* `column-reverse`
* `row`
* `row-reverse`

### [FxMain](../src/app/types/flex/fx-main.ts)

**Applies To**: Container

**Flex Type Values**: [fxMain](../src/app/types/flex/flex-type-values.ts#L47)

**CSS Type**: [`justify-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)

**Default Value**: `normal`

**Values**:

* `center`
* `end`
* `flex-end`
* `flex-start`
* `left`
* `normal`
* `right`
* `space-around`
* `space-between`
* `space-evenly`
* `start`
* `stretch`

### [FxWrap](../src/app/types/flex/fx-wrap.ts)

**Applies To**: Container

**Flex Type Values**: [fxWrap](../src/app/types/flex/flex-type-values.ts#L62)

**CSS Type**: [`flex-wrap`](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap)

**Default Value**: `nowrap`

**Values**:

* `nowrap`
* `wrap`
* `wrap-reverse`

[Back to Top](#flex-directives)
