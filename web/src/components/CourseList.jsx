import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const mockCourses = [
  {
    _id: "1",
    title: "React Basics",
    description: "Learn the fundamentals of React.",
  },
  {
    _id: "2",
    title: "Advanced JavaScript",
    description: "Deep dive into JS concepts.",
  },
  {
    _id: "3",
    title: "MongoDB Essentials",
    description: "Master MongoDB for MERN apps.",
  },
];

const CourseList = () => (
  <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
    {mockCourses.map((course) => (
      <Card
        key={course._id}
        className="flex flex-col justify-between rounded-xl shadow-sm border border-green-100 bg-white hover:shadow-md transition-shadow duration-200"
      >
        <CardHeader className="pb-2">
          <h3 className="text-lg font-bold text-green-600">{course.title}</h3>
        </CardHeader>
        <CardContent className="flex-1">
          <p className="text-slate-600 text-sm">{course.description}</p>
        </CardContent>
        <CardFooter>
          <Link href={`/courses/${course._id}`} passHref>
            <Button
              variant="mint"
              className="w-full font-semibold shadow hover:scale-[1.03] transition-transform duration-150"
            >
              View Course
            </Button>
          </Link>
        </CardFooter>
      </Card>
    ))}
  </section>
);

export default CourseList;
