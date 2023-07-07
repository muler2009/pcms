import * as MdIcons from 'react-icons/md'
import * as TbIcons from 'react-icons/tb'

export const userlink = [
  {
      label: "User",
      path: 'user',
      icon: <MdIcons.MdSupervisedUserCircle />,
      dropdown: true,
      subItems: [
        { label: "Create User", modal: true },
        { label: "Remove User", path: "remove", modal: false },
      ],
    },
    { label: "Access control", path: 'access_control', icon: <MdIcons.MdAnnouncement />, dropdown: false },
    { 
      label: "Password ", 
      path: 'job', 
      icon: <MdIcons.MdGroupWork />, 
      dropdown: true,
      subItems: [
        { label: "Reset Password" },
        { label: "Change Password", path: "/settings" },
      ],
    },
    { label: "Reports", path: 'report', icon: <TbIcons.TbReportAnalytics />, dropdown: false  }, 
]


