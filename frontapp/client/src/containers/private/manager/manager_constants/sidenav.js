import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as FcIcons from 'react-icons/fc';

import * as RiIcons from 'react-icons/ri';
import * as HiIcons from 'react-icons/hi2';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io5';
import * as MdIcons from 'react-icons/md';
import * as VscIcon from 'react-icons/vsc';


export const sidenav =[
    { 
        path: "/manager", 
        label: "Overview", 
        icon: <AiIcons.AiOutlineDashboard /> 
    },
    { 
      
        label: "Add Project", 
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
        path: "materials", 
        label: "Materials", 
        icon: <MdIcons.MdOutlineContentPasteSearch /> 
    },
    { 
        path: "word_order", 
        label: "Work Orders", 
        icon: <IoIcons.IoBagHandleOutline /> 
    },
    { 
        path: "photo_document", 
        label: "Photo and Documents", 
        icon: <HiIcons.HiOutlinePhoto /> 
    },
    { 
        path: "finance", 
        label: "Financials", 
        icon: <GiIcons.GiPayMoney /> 
    },
   

]