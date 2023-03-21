// 해시
function solution(genres, plays) {
  const answer = [];

  // Map을 이용한 풀이
  const album = new Map();

  for (let i = 0; i < genres.length; i++) {
    const [genre, play] = [genres[i], plays[i]];
    if (album.get(genre)) {
      const [sum, tracks] = [album.get(genre)[0], album.get(genre).slice(1)];
      album.set(genre, [sum + plays[i], ...tracks, [i, plays[i]]]);
    } else {
      album.set(genre, [plays[i], [i, plays[i]]]);
    }
  }

  const sortedAlbum = new Map(
    [...album.entries()].sort((a, b) => b[1][0] - a[1][0]),
  );

  for (const tracks of [...sortedAlbum.entries()]) {
    tracks[1]
      .slice(1)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .forEach(([id]) => {
        answer.push(id);
      });
  }

  return answer;
}
