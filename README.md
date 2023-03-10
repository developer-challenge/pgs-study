# ๐ฆ Programmers ๋ฌธ์  ํ์ด ์คํฐ๋

## ๐ ๊ธฐ๋ณธ ์ ๋ณด

- ๋งค์ฃผ ์ ํด์ง 2๋ฌธ์ (ํ์) ์ด์ ํ์ด
- lv.2 ์ด์์ ๋ฌธ์  ์์ฃผ

## ๐ ๊ท์น

1. ๋งค์ฃผ ๊ฐ์ ํ ๋ฌธ์ ๋ฅผ 2๊ฐ ์ด์ ์ ํด์จ๋ค.
2. ์ ํด์จ ๋ฌธ์ ๋ฅผ [issue๋ก ์์ฑ](#โ-issue-์์ฑ)
3. `{id}/{๋ฌธ์  ๋ฒํธ}`๋ก branch ์์ฑ(๋ฌธ์ ๋ฒํธ๋ ๋งํฌ URL path ๋ ์ซ์)
4. ๋ณธ์ธ id ํด๋์ lv ๋ณ ํด๋ ์์ ๋ฌธ์  ํ์ด
5. ๋ฌธ์  ํด๊ฒฐ ํ [PR ์์ฑ](#โ-pr-์์ฑ) - ํ์ด ์ค๋ช ์ถ๊ฐ
6. ๋งค์ฃผ ์ผ์์ผ ๋ฐค Merge ์งํ

### โ Commit ์ปจ๋ฒค์

- `[{id}] lv / {๋ฌธ์  ๋ฒํธ}. {๋ฌธ์  ์ ๋ชฉ} / ์๊ณ ๋ฆฌ์ฆ&์๋ฃ๊ตฌ์กฐ`
- body์๋ ๊ฐ๋จํ ์๊ฐ? ๋ฉ๋ชจ

- `commit example`

  ```zsh
  [HojinAn] lv.2 / 42583. ๋ค๋ฆฌ๋ฅผ ์ง๋๋ ํธ๋ญ / stack
  ```

### โ Issue ์์ฑ

- template ์ฌ์ฉ
- Issue ์ ๋ชฉ: `[{Github Id}] n์ n์ฃผ์ฐจ`
- Issue ๋ด์ฉ

  ```text
  - [ ] {๋ฌธ์  ๋งํฌ} | ๋ฌธ์  ๊ตฌ๋ถ
  ```

- `gh example`

  ```zsh
  gh issue create
  title: [HojinAn] 2์ 4์ฃผ์ฐจ
  body:
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42583 | ์คํ/ํ
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/12987 | Summer/Winter Coding(~2018)
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42579 | ํด์
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/42839 | ์์ ํ์
    - [ ] https://school.programmers.co.kr/learn/courses/30/lessons/12979 | Summer/Winter Coding(~2018)
  metadata: assignees - HojinAn
  ```

### โ PR ์์ฑ

- template ์ฌ์ฉ
- `{id}/{๋ฌธ์ ๋ฒํธ}` branch์์ commit ํ PR
- PR ์ ๋ชฉ: `[{Github Id}] lv{๋ฒํธ} / {๋ฌธ์  ๋ฒํธ}. {๋ฌธ์  ์ด๋ฆ}`
- PR ๋ด์ฉ

  ```text
  ## ๐ ์ฐ๊ด ์ด์
  - ์ด์ ๋ฒํธ

  <br />

  ## ๐ ์ค๋ช
  - ์ค๋ช์ ์์ฑํด์ฃผ์ธ์
  ```

- assignee๋ youself
- label๋ก ์ฌ์ฉ ์๊ณ ๋ฆฌ์ฆ&์๋ฃ๊ตฌ์กฐ ๋ช์

- `gh example`

  ```zsh
  gh pr create
  title: [HojinAn] lv.2 / 42583. ๋ค๋ฆฌ๋ฅผ ์ง๋๋ ํธ๋ญ
  body:
    {๋ฌธ์  ๋งํฌ}
  metadata: Assignees - HojinAn, label - stack
  ```
