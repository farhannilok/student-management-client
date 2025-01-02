import { useForm } from "react-hook-form";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../components/ui/form";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import CourseTableRow from "../course-table/course-table-row";
import { useQuery } from "@tanstack/react-query";

const subjectSchema = z.object({
  id: z.string(),
  username: z.string(),
  department: z.string(),
  session: z.string(),
  semester: z.string(),
});

type subjectFormValue = z.infer<typeof subjectSchema>;
const year = new Date();

const SubjectRegistration = () => {
  const form = useForm<subjectFormValue>({
    resolver: zodResolver(subjectSchema),
    defaultValues: {
      id: "20100107",
      username: "Farhan Hasan Nilok",
      department: "CSE",
      session: `Spring ${year.getFullYear()}`,
      semester: "11th",
    },
  });

  const {
    isLoading,
    error,
    data: data = [],
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      // const res = await axiosSecure(reqURLData.reqURL);
      const res = [
        {
          code: 201,
          subject: "CSE Fundamental",
          credit: 3,
        },
        {
          code: 202,
          subject: "Neural Network",
          credit: 3,
          preRequisite: "Artificial Intelligence",
        },
        {
          code: 203,
          subject: "English",
          credit: 3,
        },
        {
          code: 204,
          subject: "Networking",
          credit: 3,
        },
        {
          code: 205,
          subject: "Operating System",
          credit: 3,
        },
      ];
      // console.log(res.data)
      // return res.data
      return res;
    },
  });

  const onSubmit = (data: subjectFormValue) => {
    console.log(data);
  };
  return (
    <div className="flex w-full justify-between flex-col md:flex-row">
      <Card className="max-w-3xl w-full h-auto">
        <CardHeader className="text-center text-2xl font-medium">
          Subject Registration
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="id"
                render={({ field }) => (
                  <FormItem className="mb-2 cursor-not-allowed">
                    <Label>ID</Label>
                    <FormControl>
                      <Input id="id" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="mb-2 cursor-not-allowed">
                    <Label>Student name</Label>
                    <FormControl>
                      <Input id="username" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="mb-2 cursor-not-allowed">
                    <Label>Department</Label>
                    <FormControl>
                      <Input id="department" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="session"
                render={({ field }) => (
                  <FormItem className="mb-2 cursor-not-allowed">
                    <Label>Current Session</Label>
                    <FormControl>
                      <Input id="session" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="semester"
                render={({ field }) => (
                  <FormItem className="mb-2 cursor-not-allowed">
                    <Label>Semester</Label>
                    <FormControl>
                      <Input id="semester" {...field} disabled />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <CardFooter className="flex justify-between px-0 py-5">
                <Button type="submit">Submit</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
      <Card className="max-w-3xl w-full h-auto">
        <CardHeader className="text-center text-2xl font-medium">
          Offered Subjects
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="">
                <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                  <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                    {
                      // isLoading ? <LoadingPage />
                      //     :
                      <>
                        <table className="min-w-full leading-normal">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center"
                              >
                                no.
                              </th>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center"
                              >
                                course code
                              </th>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center"
                              >
                                Subject
                              </th>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center"
                              >
                                credit
                              </th>
                              <th
                                scope="col"
                                className="px-5 py-3 bg-white dark:border-gray-200 dark:bg-inherit dark:text-white border-b border-gray-200 text-gray-800 text-sm uppercase font-medium text-center"
                              >
                                pre-requisite
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {data &&
                              Array.isArray(data) &&
                              data.map((course, _idx) => (
                                <CourseTableRow
                                  key={_idx}
                                  course={course}
                                  index={_idx}
                                />
                              ))}
                          </tbody>
                        </table>
                      </>
                    }
                  </div>
                </div>
              </div>
              <CardFooter className="flex justify-between px-0 py-5">
                <Button type="submit">Confirm Registration</Button>
              </CardFooter>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default SubjectRegistration;
