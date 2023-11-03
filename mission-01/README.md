# Mission-01

## 중점 내용

- 여러가지 정렬 방법을 사용해보자.

---

### 레이아웃

> - card-wrap 태그 생성, width를 card-md의 width와 같게 설정.

```css
.card-wrap {
  width: 502px;
}
```

> - card-md 태그 생성, width를 100%로 설정.
> - card-md의 자식요소들은 display: flex;로 정렬.
> - card-md 태그의 margin-bottom을 16px로 설정하여 card-sm과의 간격을 설정.

```css
.card-md {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 502px;
  margin-bottom: 16px;
  padding: 20px 28px;
}
```

> - card-sm 태그는 figma파일에 있는 width와 height를 그대로 사용.
> - card-sm + card-sm의 경우 margin-left를 16px로 설정.
>   -card-sm은 float: left;로 정렬.

```css
.card-sm {
  float: left;
  width: 243px;
  padding: 14px 21px;
  text-align: center;
}
```

---

### hover 효과

> - card:hover 시에는 border를 1px solid #0084e9으로 설정.
> - link:hover 시에는 display:none 설정으로 link 버튼은 사라지고 link-hover버튼이 나타나도록 설정.

```css
.card .link:hover + .link-hover {
  display: block;
}
```

> - link-hover:hover 시에는 버튼이 계속 유지되도록 display: block 속성을 줌.

```css
.card .link-hover:hover {
  display: block;
}
```

### 생각해볼 점

대부분의 상황에서 flex를 사용했었는데, 레거시 코드중에 마크업을 수정할 수 없는 경우가 있을 수 있으니, float 또한 익숙하게 사용할 수 있도록 더 학습해야겠다.
