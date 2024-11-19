import { useNavigate } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { AuthenticationContext } from "../../App.jsx";

export function Navbar() {
  const navigate = useNavigate();
  // step2 : context 사용하기
  const authentication = useContext(AuthenticationContext);
  return (
    <Flex gap={3}>
      <Box onClick={() => navigate("/")}>HOME</Box>
      <Box onClick={() => navigate("/add")}>작성</Box>
      <Box onClick={() => navigate("/member/signup")}>가입</Box>
      <Box onClick={() => navigate("/member/login")}>로그인</Box>
      <Box
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/member/login");
        }}
      >
        로그아웃
      </Box>
      <Box onClick={() => navigate("/member/list")}>회원목록</Box>
      <Box>{authentication.id}</Box>
    </Flex>
  );
}
