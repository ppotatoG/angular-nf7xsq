## URL 경로와 컴포넌트 연결하기

### 라우팅 규칙 추가
`path: 'products/:productId', component: ProductDetailsComponent`
```ts
// app.module.ts
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            {path: '', component: ProductListComponent},
            {path: 'products/:productId', component: ProductDetailsComponent},
        ])
    ],
})
```

### 링크 연결
`<a [routerLink]="[...]""></a>`
```html
// src/app/product-list/product-list.component.html
<div *ngFor="let product of products">

  <h3>
    <a
      [title]="product.name + ' details'"
      [routerLink]="['/products', product.id]">
      {{ product.name }}
    </a>
  </h3>

  <!-- . . . -->

</div>
```