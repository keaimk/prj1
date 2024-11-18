import { Box, Spinner, Stack } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Field } from "../../components/ui/field.jsx";

export function MemberInfo() {
  const [member, setMember] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    // 회원 정보 얻기
    axios.get(`api/member/${id}`).then((res) => setMember(res.data));
  }, []);

  if (!member) {
    return <Spinner />;
  }

  return (
    <Box>
      <h3>회원 정보</h3>
      <Stack gap={5}>
        <Field label={"아이디"}>
          <Input readOnly value={member.id} />
        </Field>
        <Field label={"암호"}
          <Input readOnly value={member.password} />
        </Field>
        <Field label={"자기소개"}>
          <Input readOnly value={member.description} />
        </Field>
        <Field label={"가입일시"}>
          <Input
            type={"local-datatime-local"}
            readOnly
            value={member.inserted}
          />
        </Field>
      </Stack>
    </Box>
  );
}
