import { SignIn } from "@clerk/clerk-react";
 
const SignInPage = () => {
  return (
    <div className="flex items-center justify-center py-10 pb-40">
      <SignIn path="/sign-in" signUpUrl="/sign-up"/>
    </div>
  );
};
 
export default SignInPage;