import { SignIn } from "@stackframe/stack";
import Link from "next/link";

export default function SignInPage(){
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black-100 to-black-100">
            <div className ="max-w-md w-full space-y-8">
                <SignIn />
                <Link href='/'>Go to Home</Link>
            </div>
        </div>
    );
}