import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchStudents } from "@/common/lib/api/students/fetchStudents";

export const getStudentApplicationPageServerProps: GetServerSideProps = async (
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

  if (student?.free_discount_end_at) {
    const currentTime = new Date().getTime();
    const freeDiscTime = new Date(student.free_discount_end_at).getTime();

    // student has free discount
    if (freeDiscTime > currentTime) {
      return {
        redirect: {
          permanent: false,
          destination: "/login/",
        },
      };
    }
  }

  return {
    props: {
      student,
    },
  };
};
