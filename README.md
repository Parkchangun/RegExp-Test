# 정규 표현식(RegExp) - Regular Expression

> 특정한 문자열을 검색하고 대체하는데 사용 가능한 일종의 패턴

## Role(역할)

1. 문자 검색(Search)
1. 문자 대체(Replace)
1. 문자 추출(Extract)

## Declaration(선언)

```js
  //constructor
  new RegExp('표현', '옵션');
  new RegExp('[a-z]', 'gi');

  //literal
  /표현/옵션
  /[a-z]/gi
```

## Example(예제)

```js
const str = `
010-4038-4244
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
```

## Method(메소드)

메소드 | 문법 | 설명
--|--|--
test | `RegExp.test(String)` | return Boolean
match | `String.match(RegExp)` | return equal Array
replace | `String.replace(RegExp, String)` | replace matching character

## Flag(옵션)

플래그 | 설명
--|--
g | 모든 문자 일치(Global)
i | 대소문자 구분 없이 일치(Ignore case)
m | 여러 줄 일치(Multi line)

## Pattern(표현)

패턴 | 설명
--|--
^ab | Line 시작에 있는 ab와 일치
ab$ | Line 끝에 있는 ab와 일치
. | 임의의 한 문자와 일치
a&verbar;b | a or b와 일치
ab? | b가 없거나 b와 일치
{3} | 3개 연속 일치
{3,} | 3개 이상 연속 일치
{3,5} | 3개 이상 5개 이하 연속 일치
[abc] | a or b or c
[a-z] | a~z 사이의 문자 구간에 일치
[A-Z] | A~Z 사이의 문자 구간에 일치
[0-9] | 0~9 문자 구간에 일치
[가-힣] | 가~힣 문자 구간에 일치
\w | 63개 문자(Word, 대소영문 52 + 숫자 10 + _)에 일치
\b | 63개 문자에 일치하지 않는 문자 경계(Boundary)
\d | 숫자(Digit)에 일치
\s | 공백(Space, Tab etc..)에 일치
(?=) | 앞쪽 일치(Lookahead)
(?<=) | 뒤쪽 일치(Lookbehind)