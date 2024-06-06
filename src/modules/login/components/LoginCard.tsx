import { Card } from "@/common/components/ui/card";
import LoginCardHeader from "./LoginCardHeader";
import LoginCardContent from "./LoginCardContent";
import LoginCardFooter from "./LoginCardFooter";

const LoginCard = () => {
  return (
    <Card className="border-transparent w-full lg:w-[350px] lg:mx-auto lg:border-black mt-4">
      <LoginCardHeader />
      <LoginCardContent />
      <LoginCardFooter />
    </Card>
  );
};

export default LoginCard;
