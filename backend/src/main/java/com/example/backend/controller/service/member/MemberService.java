package com.example.backend.controller.service.member;

import com.example.backend.controller.mapper.member.MemberMapper;
import com.example.backend.dto.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {
    final MemberMapper mapper;

    public boolean add(Member member) {
        int cnt = mapper.insert(member);
        return cnt == 1;
    }
}