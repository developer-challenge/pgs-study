# 🐦 Programmers 문제 풀이 스터디

## 📌 기본 정보

- 매주 정해진 3문제 이상 풀이
- lv.2 이상의 문제 위주

## 📌 규칙

1. 매주 각자 풀 문제를 3개 이상 정해온다.
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

- Issue 제목: `[{Github Id}] n월 n주차`
- Issue 내용

  ```text
  {문제 링크}
  문제 구분
  ```

- `gh example`

  ```zsh
  gh issue create
  title: [HojinAn] 2월 4주차
  body:
    https://school.programmers.co.kr/learn/courses/30/lessons/42583
    스택/큐
  metadata: assignees - HojinAn
  ```

### ✅ PR 생성

- `{id}/{문제번호}` branch에서 commit 후 PR
- PR 제목: `[{Github Id}] lv{번호} / {문제 번호}. {문제 이름}`
- PR 내용

  ```text
  {문제 링크}

  ## 🔗 linked issue #7

  ## 알고리즘 & 풀이 설명

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
