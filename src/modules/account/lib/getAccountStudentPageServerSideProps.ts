import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchStudentDataV2 } from "@/common/lib/apiV2/students/fetchStudentDataV2";

export const getAccountStudentPageServerProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/login/",
      },
    };
  }

  const decodedToken = decode(token) as JwtPayload;
  const student = await fetchStudentDataV2(decodedToken.id);

  return {
    props: {
      student,
    },
  };
};
