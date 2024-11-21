USE prj20241114;
DESC board;

CREATE TABLE board_file
(
    baord_id INT          NOT NULL,
    name     VARCHAR(300) NOT NULL,
    PRIMARY KEY (baord_id, name)
);

SELECT *
FROM board_file;

# 게시물 목록 조회 (W/ 파일 수)
SELECT b.id, b.title, COUNT(DISTINCT c.id) 댓글수, COUNT(DISTINCT f.name) 파일수
FROM board b
         LEFT JOIN comment c
                   ON b.id = c.board_id
         LEFT JOIN board_file f
                   ON b.id = f.baord_id
GROUP BY b.id
ORDER BY b.id DESC;

SELECT b.id, b.title, ()댓글수, COUNT(DISTINCT f.name) 파일수
FROM board b
GROUP BY b.id
ORDER BY b.id DESC;