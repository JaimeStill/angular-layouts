# [Flex Styles](./theme/flex.scss)

```html
<div class="full-height fx fx-row fx-wrap fx-jc-flex-start fx-ai-center fx-ac-space-around gap-8">
    <p *ngFor="let num of array"
       class="m4 p8 rounded card-outline-divider text-align-center"
       [style.width.px]="220">{{num}}</p>
</div>
```

![image](https://user-images.githubusercontent.com/14102723/199856253-9cdbb448-cc88-4057-bb63-848cb0d72b93.png)
