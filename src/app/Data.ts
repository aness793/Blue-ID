import { Data, User } from "./Data_class"

export const Tags=[
    'Explore',
     'Data', 
     'AI Assitant', 
     'Marine', 
     'Courses', 
     'Databases', 
     'Excel', 
     'Cartography', 
     'Technology', 
     'Statistics', 
     'Ocean', 
  ]
  export const data:Data[]=[
    {
        title:'Marine Submersion Map ',
        image:'img1.jpg',
        time:'10 weeks',
        difficulty:'easy',
        discription:'Delve into the fundamentals of marine cartography with a focus on the Boumerdes region. This course will guide you through the process of creating accurate and detailed marine maps',
        Author: 'Bilal sbaihia'
    
    },
    {
        title:'Boumerdes Marine Map',
        image:'img2.jpg',
        time:'6 weeks',
        difficulty:'intermediate',
        discription:'Enhance your expertise in marine topography by learning to map submersion zones and underwater landscapes. This course provides a deep dive into the techniques used.',
        Author: 'chabane juba'
    
    },
    {
        title:'Algiers Bay nautical chart',
        image:'img3.jpg',
        time:'10 weeks',
        difficulty:'advanced',
        discription:'Master the skills needed to create and interpret nautical charts with a focus on the Algiers Bay. This comprehensive course covers everything from the basics of charting.',
        Author: 'chabane juba',
    
    },
    {
        title:'Turtle Explanatory Diagrams',
        image:'img4.jpg',
        time:'6 weeks',
        difficulty:'intermediate',
        discription:'Unlock the secrets of marine turtle biology through the creation of detailed explanatory diagrams. This course covers the essentials of turtle anatomy and behavior. ',
        Author: 'bilal sbaihia'
    
    },
    {
        title:'Marine Species Crab ',
        image:'img5.jpg',
        time:'5 weeks',
        difficulty:'intermediate',
        discription:'Marine Species Crab  Explore the fascinating world of marine crabs in this comprehensive course. You will learn about their biology, habitat, and role in the ecosystem through engaging visual content.',
        Author: 'chabane juba'
    
    },
    {
        title:'Data Base Marine Biodivesity',
        image:'img6.jpg',
        time:'6 weeks',
        difficulty:'intermediate',
        discription:'Take your skills in managing marine biodiversity data to the next level. This course teaches you how to build, organize, and analyze databases that are crucial for conservation. ',
        Author: 'samir grimes'
    
    },
]
export const exchange = [
    {
        name:'Akram R',
        text:`Additionally, I'm concerned about the impact of climate change on submersion zones. Will this topic be addressed? I would also like to know the level of difficulty—do I need to have advanced knowledge before enrolling?`,
        image:'akram.jpg',
    },
    {
        name:'Lynda B',
        text:`The idea of mapping underwater landscapes and submersion zones sounds fascinating. Could you provide more details on the specific techniques that will be covered in this course? `,
        image:'lynda.jpg',
    },
    {
        name:'mounir K',
        text:`I’m excited about the opportunity to learn nautical charting, especially for a specific region like Algiers Bay. But I’m wondering, will the skills I learn be applicable to charting other regions as well? `,
        image:'mounir.jpg',
    },
    {
        name:'Melissa M',
        text:`I'm really interested in learning how to create marine maps, but I wonder what specific tools or software I will need to get started. Also, I'm curious if this course is suitable for someone without any prior experience in cartography.`,
        image:'melissa.jpg',
    },
   
]
export const courses = [
    {
        image:'course1.jpg',
        duration:'12 hours',
        stars:2.5,
        raters:33,
        paragraph:`Explore the fascinating world of marine crabs in this comprehensive course. You'll learn about their biology, 
habitat, and role in the ecosystem through engaging visual content.,`,
        title:'Marines species crab'
    },
    {
        image:'course2.jpg',
        duration:'16 hours',
        stars:3,
        raters:18,
        paragraph:`Explore the fascinating world of marine crabs in this comprehensive course. You'll learn about their biology, 
        habitat, and role in the ecosystem through engaging visual content.,`,
        title:'cartography'
    },
    {
        image:'course3.png',
        duration:'10 hours',
        stars:3,
        raters:27,
        paragraph:`Explore the fascinating world of marine crabs in this comprehensive course. You'll learn about their biology, 
        habitat, and role in the ecosystem through engaging visual content.,`,
        title:'Excel for beginners'
    },
    {
        image:'course4.jpg',
        duration:'8 hours',
        stars:4,
        raters:10,
        paragraph:'',
        title:''
    },
    {
        image:'course5.jpg',
        duration:'14 hours',
        stars:4,
        raters:12,
        paragraph:`Explore the fascinating world of marine crabs in this comprehensive course. You'll learn about their biology, 
        habitat, and role in the ecosystem through engaging visual content.`,
        title:'idk actually'
    },
]
export const users:User[] = [
    {
        name:'Aness',
        email:'d.rahmanianess@gmail.com',
        password:'123',
        type:'student'
    },
    {
        name:'bilal',
        email:'bilal@gmail.com',
        password:'123',
        type:'none'
    },
    {
        name:'juba',
        email:'juba@gmail.com',
        password:'123',
        type:'researcher'
    },
]