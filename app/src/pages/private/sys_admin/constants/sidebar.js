import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';


export const sidebar_link = [
    { 
        path: "register", 
        label: "Dashboard", 
        icon: <AiIcons.AiOutlineDashboard /> },
    { 
        path: "user", 
        label: "Manage User", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'register',
                label: 'New User',
                icon: <GrIcons.GrNotes />,
    
            },
            {
                path: 'edit_user',
                label: 'Edite User',
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


       