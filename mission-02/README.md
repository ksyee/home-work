# Mission - 02

## 중점 내용

- 논리적인 마크업을 신경쓰면서 레이아웃을 구성해보자.
- 일단 기능을 구현하는 것을 목표로 하자.

### 레이아웃

> main 태그 안에 section 태그로 묶어서 레이아웃 구성.
> section 태그에 bg-img를 설정하여 배경 이미지를 넣어줌.
> section 태그에 padding을 설정하여 section 태그 안의 요소들과의 간격을 설정.
> 콘텐츠 정렬 방식은 flex를 사용함.

```css
.login {
  position: relative;
  height: calc(100vh - 50px);
  padding: 70px 32px 0;
  color: #fefefe;
  background: linear-gradient(
      180deg,
      rgba(51, 47, 43, 0.4) 38.26%,
      rgba(50, 46, 42, 0.1) 89.14%
    ), url(../images/coffee_bg.png) no-repeat 25% 80% / cover, lightgray
      4.488px -1.18px / 149.578% 100.145% no-repeat;
}
```

> svg 이미지는 img 태그로 불러오지 않고 background-image로 불러오는 방식으로 통일하여 사용.
> form 안의 input요소에 focus가 되었을 때, 부모 div에 .is-active 클래스를 추가하여 outline 속성을 줌.

```css
.is-active {
  outline: 3px solid #333e89;
  border-radius: 2px;
}
```

> input:password요소의 텍스트 애니메이션은 input:password요소에 focus가 되었을 때, label요소에 .focus 클래스를 추가하여 애니메이션을 줌.
> label 요소에 .focus 클래스를 추가하면 label 요소의 텍스트가 위로 올라가도록 설정.
> input:password요소에 focus가 풀어져도 label 요소의 텍스트가 위로 올라가있도록 inputPwdFocus 변수에 boolean값을 저장하여 상태를 관리.

```css
.input-pwd {
  position: relative;
  display: flex;
  height: 48px;
  margin-top: 52px;
  align-items: end;
}

.input-pwd label {
  position: absolute;
  top: calc(100% - 28px);
  left: 8px;
  font-size: 18px;
  transition: all 0.2s ease-in-out;
}
```

```javascript
let inputPwdFocus = false;

const pwdLabelFocus = () => {
  if (inputPwdFocus) {
    inputPwdLabel.classList.add('focus');
  } else {
    inputPwdLabel.classList.remove('focus');
  }
}; // password input focus 시에 label에 focus 클래스 추가

inputPwd.addEventListener('focus', () => {
  inputPwdFocus = true;
  pwdLabelFocus();
}); // password input focus 시에 input-box에 is-active 클래스 추가

inputPwd.addEventListener('blur', () => {
  inputPwdFocus = false;
  if (inputPwd.value.length === 0) {
    pwdLabelFocus();
  }
}); // password input blur 시에 input-box에 is-active 클래스 제거
```

> 이메일 저장하기 버튼은 input[type=checkbox]요소를 보이지 않게 하고 svg 아이콘을 사용하여 체크박스를 대체함.
> input[type=checkbox]요소에 키보드로 접근 가능하도록 하기 위해 hidden이나 display:none을 사용하지 않고 .sr-only 클래스를 사용하여 키보드로 접근할 수 있도록 함.

```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  clip-path: polygon(0 0, 0 0, 0 0);
  white-space: nowrap;
}
```

> 이메일이나 패스워드가 잘못 입력되었을 때, 에러 메시지와 아이콘을 보여주는 요소는 class를 추가하여 보여주도록 함.
> 에러 메시지는 input 요소의 형제 요소로 위치하도록 함.

```css
.input-email .icon {
  position: absolute;
  right: 8px;
  bottom: 8px;
  display: none;
  width: 16px;
  height: 16px;
}

.input-email.success .icon.checked-icon {
  display: block;
  background: url(../images/check_icon.svg) no-repeat center center;
}

.input-email.error .icon.checked-icon {
  display: block;
  background: url(../images/warning_icon.svg) no-repeat center center;
}

.input-email .notification {
  position: absolute;
  left: 8px;
  bottom: -20px;
  display: none;
  font-size: 12px;
  font-weight: 300;
}

.input-email.error .notification {
  display: block;
}
```

> 패스워드를 텍스트가 보이도록 하는 버튼은 button.visible-btn를 사용하여 구현.
> 패스워드를 입력하다가 visible-btn을 클릭하면 focus가 풀리는 현상을 막기 위해 visible-btn 클릭 시 preventDefault()를 사용하여 focus가 풀리는 현상을 막음.

```javascript
document
  .querySelector('.visible-btn')
  .addEventListener('mousedown', function (e) {
    e.preventDefault();
  }); // visible-pwd 버튼 클릭 시에 input-box에 focus가 해제되는 것을 방지
```

### 생각해볼 점

- 코드의 가독성이나 유지보수가 수월한 코드를 작성할 수 있도록 하자.
- 코드를 작성할 때, 불필요한 코드는 지우고 작성하자.
- 부족하지만 스크립트를 적용해보았다. 코드의 정리가 필요하다.
