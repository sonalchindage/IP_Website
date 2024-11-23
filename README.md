
The Ideation People Solutions Website is a secure and efficient web application entirely designed and developed by Sonal Chindage. The project features a comprehensive Admin Panel to manage website functionalities, simplifying administrative tasks while ensuring ease of use for authorized users.



  

## Objective 
The project implements a secure **Admin Panel** with role-based access, allowing only authorized administrators to perform specific tasks. The admin functionalities are divided into two key dashboards, ensuring clear role segregation and efficient data management.  



### Scenario Fit  

The admin panel in this project aligns with the RBAC scenario by providing separate functionalities for two types of admins:

Contact Admin:

Manages user details submitted via the contact form.
Can perform CRUD (Create, Read, Delete) operations on user data, displayed dynamically on cards for flexibility.
Newsletter Admin:

Manages subscribers and newsletter data.
Allows the admin to create newsletters using CKEditor, update or delete subscriber details, and send newsletters using Nodemailer.

When users click on the Log In button in the navbar, they are prompted to enter a username and password. Only authorized admins with valid credentials can log in to access the Admin Panel. The current credentials for access are:

Username: sonalchindage@gmail.com
Password: sonal@12345


This segregation of tasks demonstrates the implementation of role-based functionalities as required.

### Core Requirements Coverage  

1. **User Management**  
   - Collects and manages user information such as name, surname, and contact number submitted through the contact form.  
   - Allows the Contact Admin to add new users and delete existing user data dynamically.  

2. **Role Management**  
   - Roles are pre-defined:  
     - **Contact Admin** handles user details.  
     - **Newsletter Admin** manages newsletters and subscriber data.  
   - Each admin role has unique permissions, ensuring secure and structured access.  

3. **Dynamic Permissions**  
   - Role-based access control ensures each admin has access only to relevant functionalities:  
     - Contact Admin: Add and delete user data.  
     - Newsletter Admin: Create, edit, and delete newsletters, and manage subscriber data.  

4. **API and Database Usage**  
   - Firebase is used for storing and retrieving data dynamically.  
   - Nodemailer is integrated for automated email functionality, simulating server-like operations.  



### Additional Features  

1. **Blog Creation**  
   - Allows the admin to create, edit, and delete blog posts as an added feature.  

2. **Dynamic Data Display**  
   - Uses a card-based layout to display data in a structured and user-friendly manner.  

3. **Secure Email Functionality**  
   - Nodemailer integration ensures secure and efficient email communication with users, such as newsletters and thank-you messages.  



 

#### Creativity and Design  
- The admin panel is designed with dynamic dashboards tailored to the specific needs of Contact Admin and Newsletter Admin.  
- CKEditor integration enhances newsletter creation and management.  

#### Responsiveness 
- Built using **Next.js**, ensuring responsive and seamless design across various devices.  

#### Functionality  
- Implements core RBAC functionalities with secure admin access, dynamic permissions, and role-specific operations.  

#### User Experience (UX) 
- Features intuitive navigation between Contact Admin and Newsletter Admin dashboards.  

#### Technical Skills  
- The use of **Firebase**, **CKEditor**, and **Nodemailer** demonstrates technical proficiency and effective implementation of modern technologies.  

#### Documentation  
- The project includes detailed documentation to guide setup and describe features clearly.  

#### Security Practices  
- Admin authentication is implemented to ensure secure access. Data protection and input validation further enhance security.  

#### Additional Features 
- Blog management, dynamic cards, and email integration add flexibility and scalability to the admin panel.  



### Conclusion  
The Ideation People Solutions Website, entirely developed by Sonal Chindage, demonstrates role-based access control by dividing admin functionalities into well-defined roles. Its secure and dynamic design ensures flexibility and efficiency, making it a suitable submission for the RBAC assignment. With its robust features and clear role segregation, the project showcases a practical implementation of RBAC principles.




## Deploy on Vercel

vercel link if this project : https://vercel.com/sonal-s-chindages-projects/ideation-people/8MBBgV828rpb8iF7FnULophurpBF
