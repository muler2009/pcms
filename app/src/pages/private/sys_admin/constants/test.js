import { AllNotification, UnreadNotification } from "./Contents";

export const MODULE_COLUMN = [
    { Header: 'Name', accessor: 'name' },
    { Header: 'Age', accessor: 'age' },
    { Header: 'City', accessor: 'city' },
    
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