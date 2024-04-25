import { SignUp } from "@clerk/clerk-react";
 
export function SignUpPage() {
  return (
      <div className="flex items-center justify-center py-10 pt-[6rem]">
      <SignUp path="/sign-up" signInUrl="/sign-in"/>
      </div>
      )
}