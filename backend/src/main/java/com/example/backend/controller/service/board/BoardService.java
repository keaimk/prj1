package com.example.backend.controller.service.board;

import com.example.backend.controller.mapper.board.BoardMapper;
import com.example.backend.dto.board.Board;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {

    final BoardMapper mapper;

    public void add(Board board) {
        mapper.insert(board);
    }
}
