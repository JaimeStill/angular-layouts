# [Flex Styles](./theme/flex.scss)

Provides utility classes for composing CSS Flexbox layouts.

CSS Property | Class / Prefix | Values
-------------|----------------|--------
**display: flex** | `.fx` |
**flex: 1 1 auto** | `.fx-flex` |
**flex-direction** | `.fx-{value}` | row, row-reverse, column, column-reverse
**flex-wrap** | `.fx-{value}` | wrap, nowrap, wrap-reverse
**justify-content** | `.fx-jc-{value}` | flex-start, flex-end, start, end, left, right, center, space-between, space-around, space-evenly
**align-items** | `.fx-ai-{value}` | stretch, start, end, center, baseline
**align-content** | `.fx-ac-{value}` | normal, start, end, center, space-between, space-around, space-evenly, stretch
**align-self** | `.fx-as-{value}` | auto, start, end, center, baseline, stretch

## Example

> Unnecessary code has been removed to focus on using flex utilities

```html
<div class="fx fx-column full-height">
    <p class="fx-as-center">CSS Flexbox</p>
    <div class="fx fx-flex fx-row fx-wrap fx-jc-space-between fx-ai-center">
        <!-- elements -->
    </div>
    <p class="fx-as-center">CSS Grid</p>
    <div class="fx-flex">
        <!-- elements -->
    </div>
</div>
```

![image](https://user-images.githubusercontent.com/14102723/200082485-197e0743-8552-431e-80de-27e36fdb39f8.png)

