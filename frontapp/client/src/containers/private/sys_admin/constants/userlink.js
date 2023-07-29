import * as MdIcons from "react-icons/md";
import * as TbIcons from "react-icons/tb";
import RegistrationForm from "../admin_component/RegistrationForm";

export const userlink = [
  {
    label: "User",
    path: "user",
    icon: <MdIcons.MdSupervisedUserCircle />,
    dropdown: true,
    subItems: [
      { label: "Create User", modal: true },
      { label: "Remove User", path: "remove", modal: false },
      { label: "Generate username", path: "generate", modal: false },
    ],
  },
  {
    label: "Access control",
    path: "access_control",
    icon: <MdIcons.MdAnnouncement />,
    dropdown: false,
  },
  {
    label: "Password ",
    path: "job",
    icon: <MdIcons.MdGroupWork />,
    dropdown: true,
    subItems: [
      { label: "Reset Password" },
      { label: "Change Password", path: "/settings" },
    ],
  },
  {
    label: "Reports",
    path: "report",
    icon: <TbIcons.TbReportAnalytics />,
    dropdown: false,
  },
];

export const userTabs = [
  {
    label: "Adduser",
    icon: <MdIcons.MdGMobiledata />,
    content: <RegistrationForm />,
  },
  {
    label: "Edit",
    icon: <MdIcons.MdGMobiledata />,
    content: <h1>Edit User</h1>,
  },
  {
    label: "Permission",
    icon: <MdIcons.MdGMobiledata />,
    content: <h1>Permission</h1>,
  },
  {
    label: "Assign Roles",
    icon: <MdIcons.MdGMobiledata />,
    content: <h1>Assign Roles</h1>,
  },
  {
    label: "Assign Group",
    icon: <MdIcons.MdGMobiledata />,
    content: <h1>Assign Group</h1>,
  },
];
