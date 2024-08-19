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
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const loginSchema = z.object({
  name: z
    .string({ message: "Name required" })
    .min(5, { message: "Name is too small" })
    .max(30, { message: "Name is too big" }),
  email: z
    .string({ message: "Email required" })
    .email("Please enter a valid email"),
  password: z
    .string({ message: "Password required" })
    .min(6, "Password must be longer than six character")
    .max(20, "Password is too big"),
  confirmPassword: z
    .string({ message: "Confirmation password required" })
    .min(6, "Confirmation password must be longer than six character")
    .max(20, "Password is too big"),
});

type registerFormValue = z.infer<typeof loginSchema>;

const onSubmit = (data: registerFormValue) => {
  if (data.password === data.confirmPassword) {
    localStorage.setItem("auth", JSON.stringify(data));
    toast.success("Registration successfull")
  }
  console.log(data);
};

export function Registration() {
  const [isVisible, setIsVisible] = useState(false);
  const form = useForm<registerFormValue>({
    resolver: zodResolver(loginSchema),
  });
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Registration</CardTitle>
          <CardDescription>register with proper credentials</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="mb-2">
                    <Label>Name</Label>
                    <FormControl>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                    <FormItem className="mb-2">
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
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <div className="relative">
                    <FormItem>
                      <Label>Confirm Password</Label>
                      <FormControl>
                        <Input
                          id="confirmPassword"
                          placeholder="Confirm your password"
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
                <Link to={`/login`} className="text-sm underline">
                  already have an account, login now
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
