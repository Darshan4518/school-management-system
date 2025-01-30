import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Calendar } from "../ui/calendar";
import { GraduationCap, Save } from "lucide-react";

const teacherData = {
  name: "John Doe",
  email: "john.doe@school.edu",
  phone: "+1 (555) 123-4567",
  address: "123 Education St, Teacherville, ST 12345",
  department: "Mathematics",
  joinDate: "2018-09-01",
  qualifications: [
    {
      degree: "Ph.D. in Mathematics",
      institution: "University of Mathematics",
      year: "2015",
    },
    {
      degree: "M.Sc. in Applied Mathematics",
      institution: "State University",
      year: "2010",
    },
    {
      degree: "B.Sc. in Mathematics",
      institution: "City College",
      year: "2008",
    },
  ],
  subjects: ["Algebra", "Calculus", "Statistics"],
  bio: "Passionate mathematics educator with over 10 years of experience in teaching and research. Committed to making complex mathematical concepts accessible and engaging for students of all levels.",
};

export default function TeacherProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState(teacherData);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    // Here you would typically send the updated data to your backend
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Teacher Profile</h1>
        <Button onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? "Cancel" : "Edit Profile"}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
            <CardDescription>Your basic information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage
                  src="/placeholder-avatar.jpg"
                  alt={profileData.name}
                />
                <AvatarFallback>
                  {profileData.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {isEditing && <Button variant="outline">Change Photo</Button>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                value={profileData.name}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                value={profileData.email}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                value={profileData.phone}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                name="address"
                value={profileData.address}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Professional Information</CardTitle>
            <CardDescription>Your teaching details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Input
                id="department"
                name="department"
                value={profileData.department}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="joinDate">Join Date</Label>
              <Input
                id="joinDate"
                name="joinDate"
                type="date"
                value={profileData.joinDate}
                onChange={handleInputChange}
                disabled={!isEditing}
              />
            </div>
            <div className="space-y-2">
              <Label>Subjects</Label>
              <div className="flex flex-wrap gap-2">
                {profileData.subjects.map((subject, index) => (
                  <Badge key={index} variant="secondary">
                    {subject}
                  </Badge>
                ))}
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                disabled={!isEditing}
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Qualifications</CardTitle>
          <CardDescription>Your educational background</CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {profileData.qualifications.map((qual, index) => (
              <li key={index} className="flex items-start space-x-2">
                <GraduationCap className="mt-0.5 h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="font-medium">{qual.degree}</p>
                  <p className="text-sm text-muted-foreground">
                    {qual.institution}, {qual.year}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>

      <Tabs defaultValue="schedule">
        <TabsList>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
        </TabsList>
        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Weekly Schedule</CardTitle>
              <CardDescription>
                Your teaching schedule for this week
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={new Date()}
                className="rounded-md border"
              />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="classes">
          <Card>
            <CardHeader>
              <CardTitle>Current Classes</CardTitle>
              <CardDescription>
                Classes you are currently teaching
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Advanced Algebra</p>
                    <p className="text-sm text-muted-foreground">
                      Grade 11 - Room 301
                    </p>
                  </div>
                  <Badge>Mon, Wed, Fri</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Calculus I</p>
                    <p className="text-sm text-muted-foreground">
                      Grade 12 - Room 305
                    </p>
                  </div>
                  <Badge>Tue, Thu</Badge>
                </li>
                <li className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Statistics</p>
                    <p className="text-sm text-muted-foreground">
                      Grade 10 - Room 203
                    </p>
                  </div>
                  <Badge>Mon, Wed</Badge>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {isEditing && (
        <div className="flex justify-end">
          <Button onClick={handleSave}>
            <Save className="mr-2 h-4 w-4" />
            Save Changes
          </Button>
        </div>
      )}
    </div>
  );
}
