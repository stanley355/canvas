import { fetchStudents } from "@/common/lib/api/students/fetchStudents";
import { JwtPayload, decode } from "jsonwebtoken";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

export const getPlanStudentPageServerProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (!token) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/login/",
      },
    };
  }
  const user = decode(token) as JwtPayload;
  const student = await fetchStudents(user.id);

  if (!student?.id) {
    return {
      redirect: {
        permanent: false,
        destination: "/account/",
      },
    };
  }

  return {
    props: {
      student,
    },
  };
};
