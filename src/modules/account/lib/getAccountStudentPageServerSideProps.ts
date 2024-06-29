import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchStudents } from "@/common/lib/api/students/fetchStudents";

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
  const student = await fetchStudents(decodedToken.id);

  return {
    props: {
      student,
    },
  };
};
