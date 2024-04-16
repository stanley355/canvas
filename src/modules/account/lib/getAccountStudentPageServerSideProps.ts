import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchStudentAvailability } from "@/common/lib/api/students/fetchStudentAvailability";

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
  const studentAvailability = await fetchStudentAvailability(decodedToken.id);

  return {
    props: {
      studentAvailability,
    },
  };
};
