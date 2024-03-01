import { FormEvent, useState } from "react";
import { Label } from "@/common/components/ui/label";
import { Input } from "@/common/components/ui/input";
import { Button } from "@/common/components/ui/button";

const LoginForm = () => {
  const [showError, setShowError] = useState(false);

  return (
    <form onSubmit={(e: FormEvent<HTMLFormElement>) => e.preventDefault()} className="mb-4">
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" name="email" placeholder="Email" />
    {showError && <div className="p-2 mt-4 text-xs bg-red-300">
      There was an error when processing, please use Google Login to continue
    </div>}
    <Button className="w-full mt-4" type="submit" onClick={() => setShowError(true)}>Submit</Button>
  </form>
  );
};

export default LoginForm;
