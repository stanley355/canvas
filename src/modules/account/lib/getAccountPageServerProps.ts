import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchUsersAccount } from "@/common/lib/api/users/fetchUsersAccount";

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
  const account = await fetchUsersAccount(decodedToken.id);

  return {
    props: {
      account,
    },
  };
};
