import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';

import * as RiIcons from 'react-icons/ri';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as VscIcon from 'react-icons/vsc';


export const sidebar_link = [
    { 
        path: "/admin", 
        label: "Overview", 
        icon: <AiIcons.AiOutlineDashboard /> 
    },
    { 
       
        label: "Account Managment", 
        icon: <FaIcons.FaUserCog />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,    
        submenu: [
            {
                path: 'user',
                label: 'User',
                icon: <FaIcons.FaRegUser />,
    
            },
            {
                path: 'company',
                label: 'Company',
                icon: <VscIcon.VscOrganization />,
    
            },
        ] 
    },
    { 
        path: "cmp", 
        label: "Content Management", 
        icon: <MdIcons.MdOutlineContentPasteSearch /> 
    },
    { 
        path: "report", 
        label: "Report and Analytics", 
        icon: <VscIcon.VscReport /> 
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


       