import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';


export const sidebar_link = [
    { 
        path: "/admin", 
        label: "Dashboard", 
        icon: <AiIcons.AiOutlineDashboard /> },
    { 
       
        label: "Manage User", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'add_user',
                label: 'New User',
                icon: <GrIcons.GrNotes />,
    
            },
            {
                path: 'edit_user',
                label: 'Edit User',
                icon: <GrIcons.GrNotes />,
    
            },
        ] 
    }

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


       