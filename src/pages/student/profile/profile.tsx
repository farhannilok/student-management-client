import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "../../../components/ui/card";
const Profile = () => {
  // const user = JSON.parse(localStorage.getItem("auth"));
  // console.log(user);
  return (
    <div className="flex justify-center items-center h-[70vh]">
      <Card className="p-5 w-[700px] hover:shadow-md">
        {/* picture  */}
        <div>
          <Avatar className="w-20 h-20">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div className="grid grid-cols-2 p-5">
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Full Name
          </p>
          <p className="dark:text-white text-slate-900">{"Abdullah"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Student Id
          </p>
          <p className="dark:text-white text-slate-900">{"20100107"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Email
          </p>
          <p className="dark:text-white text-slate-900">{"abdullah@gmail.com"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Gender
          </p>
          <p className="dark:text-white text-slate-900">{"Male"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Date
          </p>
          <p className="dark:text-white text-slate-900">{"27-01-2001"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Total credit
          </p>
          <p className="dark:text-white text-slate-900">{150}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Enrollment Year
          </p>
          <p className="dark:text-white text-slate-900">{2020}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Completed Credit
          </p>
          <p className="dark:text-white text-slate-900">{73}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Department
          </p>
          <p className="dark:text-white text-slate-900">{"CSE"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Session
          </p>
          <p className="dark:text-white text-slate-900">{"2020"}</p>
          <p className="dark:text-white text-slate-900 text-lg font-bold">
            Phone
          </p>
          <p className="dark:text-white text-slate-900">{"01299382903"}</p>
        </div>
      </Card>
    </div>
  );
};

export default Profile;
