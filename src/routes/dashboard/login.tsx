import { createFileRoute } from '@tanstack/react-router'
import { LoginForm } from "@/components/auth/login-form"

export const Route = createFileRoute('/dashboard/login')({
  component: LoginPage,
})

export default function LoginPage() {
  
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full ">
        <LoginForm />
      </div>
    </div>
  )
}
