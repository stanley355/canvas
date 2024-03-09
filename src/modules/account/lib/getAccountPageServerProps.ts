import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchUser } from "@/common/lib/api/users/fetchUser";

export const getAccountPageServerProps: GetServerSideProps = async (
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
  const user = await fetchUser(decodedToken.email);

  return {
    props: {
      user,
    },
  };
};
