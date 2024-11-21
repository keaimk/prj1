USE prj20241114;
DESC board;

CREATE TABLE board_file
(
    baord_id INT          NOT NULL,
    name     VARCHAR(300) NOT NULL,
    PRIMARY KEY (baord_id, name)
)