export class Student {
  _id: string;
  name: string;
  email: string;
  dbo: string;
  password: string;
  fatherName: string;
  courseDetails: Array<StudentCourseDetails>;
}

export class StudentCourseDetails {
  universityId: string;
  coursesId: string;
}
