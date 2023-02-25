# 🐦 Programmers 문제 풀이 스터디

## 📌 기본 정보

- 매주 정해진 2문제(필수) 이상 풀이
- lv.2 이상의 문제 위주

## 📌 규칙

1. 매주 각자 풀 문제를 2개 이상 정해온다.
2. 정해온 문제를 [issue로 생성](#✅-issue-생성)
3. `{id}/{문제 번호}`로 branch 생성(문제번호는 링크 URL path 끝 숫자)
4. 본인 id 폴더에 lv 별 폴더 안에 문제 풀이
5. 문제 해결 후 [PR 생성](#✅-pr-생성) - 풀이 설명 추가
6. 매주 일요일 밤 Merge 진행

### ✅ Commit 컨벤션

- `[{id}] lv / {문제 번호}. {문제 제목} / 알고리즘&자료구조`
- body에는 간단한 소감? 메모

- `commit example`

  ```zsh
  [HojinAn] lv.2 / 42583. 다리를 지나는 트럭 / stack
  ```

### ✅ Issue 생성

- template 사용
- Issue 제목: `[{Github Id}] n월 n주차`
- Issue 내용

  ```text
  - [ ] {문제 링크} | 문제 구분
  ```

- `gh example`

  ```zsh
  gh issue create
  title: [HojinAn] 2월 4주차
  body:
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42583 | 스택/큐
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/12987 | Summer/Winter Coding(~2018)
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42579 | 해시
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42839 | 완전탐색
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/12979 | Summer/Winter Coding(~2018)
  metadata: assignees - HojinAn
  ```

### ✅ PR 생성

- template 사용
- `{id}/{문제번호}` branch에서 commit 후 PR
- PR 제목: `[{Github Id}] lv{번호} / {문제 번호}. {문제 이름}`
- PR 내용

  ```text
  ## 🔗 연관 이슈
  - 이슈 번호

  <br />

  ## 🔑 설명
  - 설명을 작성해주세요
  ```

- assignee는 youself
- label로 사용 알고리즘&자료구조 명시

- `gh example`

  ```zsh
  gh pr create
  title: [HojinAn] lv.2 / 42583. 다리를 지나는 트럭
  body:
    {문제 링크}
  metadata: Assignees - HojinAn, label - stack
  ```
