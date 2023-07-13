import { AllNotification, UnreadNotification } from "./Contents";

export const MODULE_COLUMN = [
    { Header: 'First Name', accessor: 'first_name' },
    { Header: 'Last Name', accessor: 'last_name' },
    { Header: 'Sex', accessor: 'gender' },
    { Header: 'Birth Date', accessor: 'date_of_birth' },
    { Header: 'E-mail', accessor: 'email' },

    
];

export const data = [
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Bob', age: 40, city: 'Chicago' },
  ];

export const notification = [
    { label: 'Unread', content: <UnreadNotification /> },
    { label: 'All Notification', content: <AllNotification /> },
    
]