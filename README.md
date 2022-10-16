# IDUS Frontend-developer test

귀한 기회를 주셔서 ie support에 대해 고민해 볼 수 있었던 시간이었습니다. 감사합니다.

## 실행

* yarn start

## 제작

* CRA + typescript + MUI v5로 제작되었습니다. 

* 확실한 IE 서포트를 위해선 기본 css styling이 가장 확실하겠지만, 작업의 효율을 위해 IE 11 서포트를 지원하는 MUI를 활용하였습니다.

## 도메인 구조

* HOME page (just links, '/'), 과제 1 page(cards, '/card_list'), 과제 2 page (forms, '/form_list') 세 개의 페이지로 구성하였습니다.

## 폴더 구조 (basic url : '/src')

* /pages : 안에 각 페이지를 구성할 컴포넌트 입니다.
* /components : 프로젝트가 간단해서 큼직하게만 분류하였지만, 사용되는 컴포넌트들을 담았습니다.
* /Layout : 각 페이지에 모두 적용될 레이아웃을 담았습니다. 
* /styles : MUI theme 파일을 담았습니다.
* /typings : types를 정리하여 담았습니다.

## 설명

### 1. 공통

* 각 과제별로 페이지를 나눠놔서 다시 홈으로 돌아가기 위한 홈 바로가기 버튼을 header에 추가하였습니다. header와 footer를 위한 레이아웃을 제작해 전체 페이지에 적용하였습니다. 현재는 별 내용이 없지만, header와 footer 항목을 명확히 구분하고, 언제든 확장이 가능한 부분이라 명시적으로 컴포넌트를 분리하였습니다.

### 2. 카드 리스트

* 가로형, 세로형 카드의 내용과 디자인이 상이해서 아에 두개의 템플릿을 별개로 작성하였습니다. (만약 같은 내용을 가로, 세로로 레이아웃만 달라지는 형식이었다면, 하나의 컴포넌트 안에서 props로 선택할 수 있도록 제작했을 것 같습니다.)

* grid도 prefix 추가 등의 방법으로 ie 11 서포트가 가능하다고 알고 있지만, 확실한 flexbox를 이용하여 목록을 구성하였습니다. 

### 3. 폼 리스트

* React-hook-form의 useForm hook과 mui의 textfield를 활용하여 제작하였습니다.

* RHF의 watch를 활용하여 남은 글자수를 표현하였고, isDirty 유무와 default value와의 비교를 통해 기존 값과의 변경을 인지하고, save 버튼을 표시합니다.

* maxLength props를 둬서 최대 글자수를 지정토록 하였고, 초과시 에러를 디자인으로 표시하고, save 할 수 없도록 save버튼을 disabled 처리했습니다.



