package com.example.backend.controller.service.board;

import com.example.backend.controller.mapper.board.BoardMapper;
import com.example.backend.dto.board.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    final BoardMapper mapper;

    public Map<String, Object> add(Board board) {
        mapper.insert(board);
        return null;
    }

    public List<Board> list() {
        return mapper.selectAll();
    }

    public Board get(int id) {
        return mapper.selectById(id);
    }
}