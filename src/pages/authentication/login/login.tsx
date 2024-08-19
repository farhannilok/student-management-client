import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { Input } from "@/components/ui/input";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const loginSchema = z.object({
  email: z
    .string({ message: "Email required" })
    .email("Please enter a valid email"),
  password: z
    .string({ message: "Password required" })
    .min(6, "Password must be longer than six character")
    .max(20, "Password is too big"),
});

type loginFormValue = z.infer<typeof loginSchema>;


export function Login() {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const form = useForm<loginFormValue>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: loginFormValue) => {
    const validation = JSON.parse(localStorage.getItem("auth"));
    if (validation.email === data.email && validation.password === data.password) {
      toast.success("Login successfull")
      navigate("/");
    }
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>Login to access your dashboard</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <Label>Email</Label>
                    <FormControl>
                      <Input
                        id="email"
                        placeholder="Enter your email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <div className="relative">
                    <FormItem>
                      <Label>Password</Label>
                      <FormControl>
                        <Input
                          id="password"
                          placeholder="Enter your password"
                          {...field}
                          type={isVisible ? "text" : "password"}
                        />
                      </FormControl>
                      {isVisible ? (
                        <HiOutlineEyeOff
                          onClick={() => setIsVisible(!isVisible)}
                          className="w-5 h-5 absolute right-6 cursor-pointer bottom-2"
                        />
                      ) : (
                        <HiOutlineEye
                          onClick={() => setIsVisible(!isVisible)}
                          className="w-5 h-5 absolute right-6 cursor-pointer bottom-2"
                        />
                      )}
                      <FormMessage />
                    </FormItem>
                  </div>
                )}
              />
              <CardFooter className="flex justify-between px-0 py-5">
                <Link to={`/register`} className="text-sm underline">
                  new here, register now
                </Link>
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
