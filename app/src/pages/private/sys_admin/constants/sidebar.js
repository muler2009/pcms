import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';


export const sidebar_link = [
    { 
        path: "/admin", 
        label: "Dashboard", 
        icon: <AiIcons.AiOutlineDashboard /> 
    },
    { 
       
        label: "User Management", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'user',
                label: 'User',
                icon: <GrIcons.GrNotes />,
    
            },
            {
                path: 'edit_user',
                label: 'EDIT USER',
                icon: <GrIcons.GrNotes />,
    
            },
        ] 
    },
    { 
        path: "cmp", 
        label: "Content Management", 
        icon: <MdIcons.MdOutlineContentPasteSearch /> 
    },

]

export const account = [
    { 
        path: "help", 
        label: "Help", 
        icon: <BiIcons.BiHelpCircle /> 
    },
    { 
        path: "setting", 
        label: "Setting", 
        icon: <IoIcons.IoSettingsOutline /> 
    },


]


       