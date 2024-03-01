import { GetServerSideProps, GetServerSidePropsContext } from "next";
import LoginForm from "@/modules/login/components/LoginForm";
import MetaSEO from "@/common/components/MetaSEO";
import LoginHeader from "@/modules/login/components/LoginHeader";
import GoogleLoginBtn from "@/modules/login/components/GoogleLoginBtn";
import Link from "next/link";
import { HOME_SEO } from "@/modules/home/lib/constant";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/common/components/ui/card"
import LoginCardHeader from "@/modules/login/components/LoginCardHeader";
import { BackgroundGradient } from "@/common/components/ui/BackgroundGradient";
import LoginCardFooter from "@/modules/login/components/LoginCardFooter";

const Login = () => {
  return (
    <>
      <Card className="border-transparent w-full lg:w-[350px] lg:mx-auto">
        <LoginCardHeader />
        <CardContent>
          <form>
            <div className="grid items-center w-full gap-4">
              <div className="flex flex-col space-y-1.5">
                {/* <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Name of your project" /> */}
                hi
              </div>
              <div className="flex flex-col space-y-1.5">
                hi
                {/* <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger id="framework">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="next">Next.js</SelectItem>
                    <SelectItem value="sveltekit">SvelteKit</SelectItem>
                    <SelectItem value="astro">Astro</SelectItem>
                    <SelectItem value="nuxt">Nuxt.js</SelectItem>
                  </SelectContent>
                </Select> */}
              </div>
            </div>
          </form>
        </CardContent>
        <LoginCardFooter />
      </Card>
    </>
  );
};

export default Login;
export const getServerSideProps: GetServerSideProps = async (
  ctx: GetServerSidePropsContext
) => {
  const token = ctx.req.cookies.token;

  if (token) {
    return {
      redirect: {
        permanent: false,
        destination: "/profile/",
      },
    };
  }

  return {
    props: {},
  };
};
