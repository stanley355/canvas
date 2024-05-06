import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { JwtPayload, decode } from "jsonwebtoken";
import { fetchUsersAccountV2 } from "@/common/lib/apiV2/users/fetchUsersAccountV2";

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
  const account = await fetchUsersAccountV2(decodedToken.id);

  return {
    props: {
      account,
    },
  };
};
