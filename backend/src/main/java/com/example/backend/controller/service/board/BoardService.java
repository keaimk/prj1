package com.example.backend.controller.service.board;

import com.example.backend.controller.mapper.board.BoardMapper;
import com.example.backend.dto.board.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    final BoardMapper mapper;

    public boolean add(Board board) {
        int cnt = mapper.insert(board);
        return cnt == 1;
    }

    public Map<String, Object> list(Integer page) {
        return Map.of("list", mapper.selectPage((page - 1) * 10),
                "count", mapper.countAll());
    }

    public Board get(int id) {
        return mapper.selectById(id);
    }

    public boolean validate(Board board) {
        boolean title = board.getTitle().trim().length() > 0;
        boolean content = board.getContent().trim().length() > 0;

        return title && content;
    }

    public boolean remove(int id) {
        int cnt = mapper.deleteById(id);
        return cnt == 1;
    }

    public boolean update(Board board) {
        int cnt = mapper.update(board);
        return cnt == 1;
    }
}