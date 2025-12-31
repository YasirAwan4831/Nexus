
## Project Structure Overview

- src/  
  - components/ → Reusable UI components  
  - pages/ → Application pages (Login, Dashboard, etc.)  
  - routes/ → Route definitions  
  - assets/ → Images and static files  

This project follows a modular React architecture for scalability and maintainability.


## Week 1 – Scheduling & Setup (Completed)

### UI Theme Setup
A consistent UI theme has been implemented using Tailwind CSS.  
The project uses a unified color palette (Primary, Secondary, Accent) and typography to ensure visual consistency across the platform.

📸 Screenshot: UI theme and dashboard layout  
<!-- Screenshot here -->

---

### Meeting Scheduling Calendar
A meeting scheduling calendar has been integrated using FullCalendar.  
This calendar allows entrepreneurs to visually view scheduled meetings and upcoming discussions.

Key highlights:
- Monthly calendar view
- Clean and responsive UI
- Ready for future availability and booking logic

**📸 Screenshot:** Calendar integrated into Entrepreneur Dashboard  
![Add Calendar](screeenshort/add-calendar.jpg)

---

### Sample Meetings (Demo Events)
Dummy meetings have been added to demonstrate calendar functionality:
- Investor Meeting – 20 Dec
- Pitch Discussion – 22 Dec
- Follow-up Call – 25 Dec

**📸 Screenshot:** Calendar with sample meeting events  
![Meeting Events](screeenshort/meeting-events-calander-2.jpg)


## 🗓️ Week 1 – Scheduling & Setup (Summary)

In Week 1, the foundation of the project was established with a strong focus on UI setup and meeting scheduling functionality. A consistent and scalable UI theme was implemented using Tailwind CSS, ensuring uniform colors, typography and layout across the application. This provided a solid visual base for future feature development.

The core highlight of this week was the integration of a meeting scheduling calendar into the Entrepreneur Dashboard. Using a clean and responsive calendar UI, entrepreneurs can visually track meetings and discussions. Demo meeting events were added to showcase functionality and simulate real-world usage scenarios, making the feature easy to understand and review.

Overall, Week 1 successfully laid down the structural and visual groundwork of the application, preparing the platform for advanced collaboration features in the upcoming phases.

![Week 1 Complete](https://img.shields.io/badge/Week%201-COMPLETE%20(UI%20Level)-brightgreen?style=for-the-badge)


-------------




## Week 2 – Video Calling & Collaboration (In Progress)

### Video Calling UI (Mock)
A video calling interface has been added as a frontend mock to demonstrate real-time collaboration capabilities between investors and entrepreneurs.

Features included:
- Video call screen layout
- Mic on/off toggle
- Video on/off toggle
- End call button
- Clean and minimal UI for demo purposes

**Screenshot:** Full page dashboard with video call section  ![Full page dashboard with video call section ](screeenshort/video-call02.png)

**Screenshot:** Video calling mock interface  
![Video calling mock interface ](screeenshort/video-call01.png)

---------------
### Document Chamber (Mock)
A document chamber UI has been added to manage deal-related files such as proposals and agreements.  
The interface includes document listing, upload button (mock), and status labels like Draft, In Review and Signed.

**📸 Screenshot:** Document Chamber UI  
![Document Chamber UI   ](screeenshort/document-uplode01.png)


##  Week 2 Completed – UI Enhancements & Features

**Status:** Completed successfully

In Week 2, key UI features were implemented and integrated smoothly into the Nexus project. The focus was on improving usability, visual consistency and core dashboard functionality.

### Highlights:

*  **Calendar Dashboard** integrated and displayed correctly
*  **Video Call Mock UI** added for meeting simulation
*  **Document Chamber UI** implemented for managing startup documents
*  **Consistent color theme & layout** applied across new components

All features were tested locally, screenshots were captured and changes were pushed to GitHub.

 *Week 2 tasks are fully completed and ready for review.*

![Week 2 Complete](https://img.shields.io/badge/Week%202-COMPLETE%20(UI%20Level)-brightgreen?style=for-the-badge)

##  Week 3 – Payment UI & Transactions (In Progress)

###  Overview
In Week 3, the focus is on implementing the **Payment UI** for the Nexus Platform.  
This module allows users to view and interact with a clean, user-friendly payment interface, preparing the system for future payment integrations.

---

### 💳 Payment UI Features
- Dedicated **Payments page** accessible from the sidebar
- Card-based payment layout (UI mock)
- Consistent design using Tailwind CSS theme
- Fully responsive layout inside Dashboard

---

###  Implementation Details
- New Payments page created and connected via routing
- Sidebar navigation updated to include Payments
- Dashboard layout reused for consistency
- UI prepared for future backend/payment gateway integration

---

### 📸 Screenshots
> Below screenshots demonstrate the completed Payment UI setup:

- **Payment Card UI / Slide**  
  ![Payment Card](./screeenshort/payment-slide-bar.png)

- **Payment Page – Full View**  
  ![Payment Page Full](./screeenshort/payment-page-full.png)



---

### 📅 Status
✅ Payment UI created  
✅ Routing configured  
✅ Screenshots documented  

⏳ Next: Payment flow logic & enhancements

### 💼 Payment Actions (Deposit / Withdraw / Transfer)

The following screenshots demonstrate the **mock payment actions** implemented as part of the Payment UI.  
These actions are UI-based simulations designed to represent real-world payment workflows.

- **Wallet Overview & Add Payment (Mock UI)**  
  Displays the wallet balance with an option to add funds.
This screen provides a quick overview of available payment balance inside the wallet.  
  ![Deposit UI](./screeenshort/add-%20banlace-payment.png)

- **Payment Actions: Deposit / Withdraw / Transfer (Mock UI)**  
  Shows available payment actions including deposit, withdraw and transfer.
These actions are UI simulations representing common financial operations.
  ![Withdraw UI](./screeenshort/d-w-t-ss0.png)

- **Recent Transactions List (Mock UI)**  
  Represents transferring funds between users within the platform (UI mock).  
  ![Transfer UI](./screeenshort/transactions-list3.png)

---

### 📸  Screenshots

Below are the key screenshots demonstrating the completed features:

Entrepreneur Dashboard – Funding Request View
![Funding Request View UI](./screeenshort/yasir001.png)

Payments Page – Recent Transactions (Sender → Receiver visible)
![Sender → Receiver visible UI](./screeenshort/yasir0001.png)

Funding Offer Form (Investor Side)


## 🤝 Funding Deal – Investor → Entrepreneur (Mock Flow)

The following screenshots demonstrate the mock funding deal flow from an investor to an entrepreneur.
This completes the simulated investment lifecycle on the platform.

Entrepreneur Dashboard – Funding Request View
Shows pending funding requests received from investors on the entrepreneur dashboard.



Funding Offer Card (Zoomed View)
Displays an individual funding offer card with Pending status and available actions.



Send Funding Offer Section (Investor Side)
Investor can enter funding amount, add an optional message and send a funding offer.



### 📝 Summary
Entrepreneurs can view funding offers sent by investors and take action (Accept / Decline).
This completes the mock funding deal flow between Investor and Entrepreneur.

------
## 🔐 Milestone 6
**Security & Access Control
(Completed)**

 ***Overview***<br>
Milestone 6 focuses on improving frontend security and access control for the Nexus platform.
This module enhances the authentication flow with role awareness and additional security layers.

 ***Implemented Features***<br>
• Role-based Login UI (Investor / Entrepreneur) with separate dashboard redirects
• Multi-step Login Flow with a mock **OTP (2FA)** screen for enhanced security
• Clean, responsive authentication UI using reusable components


### 📸 Screenshots
* • Login Page (Role Selection)
![Login Page (Role Selection) UI](./screeenshort/login-p-role.png/)

* • OTP Verification Screen* 
![OTP Verification Screen UI](./screeenshort/otp-page.png)

• Successful Redirect to Role-based Dashboard
![Successful Redirect to Role-based Dashboard UI](./screeenshort/deshbore101.png)


 Module Status
These updates mark the start of Module 6 and prepare the platform for stronger authentication and access control mechanisms.

![Milestone 6 Completed](https://img.shields.io/badge/Milestone06-Completed-red?style=for-the-badge) 
---------------------------------


![Milestone 7](https://img.shields.io/badge/Milestone%207-STARTED-blue?style=flat-square)
## Milestone 7: Integration & Demo Preparation

In this milestone, we focused on integrating all newly developed modules into the main application flow. 
All major features such as Payments, Security & Access Control, and role-based dashboards are now accessible directly from the sidebar navigation.

The application layout ensures clear separation between Entrepreneur and Investor panels, improving usability and navigation clarity.
Basic responsive checks were performed to ensure proper layout on different screen sizes.

This milestone also prepares the platform for final demo and walkthrough by adding a dedicated Platform Demo entry.
Screenshots below demonstrate successful integration of modules and navigation flow.


## Screenshots Section
### Dashboard Layout (Full Sidebar View)
![Dashboard Sidebar](screeenshort/sidebar-yasir.png)

This screenshot shows the complete dashboard sidebar with role-based navigation, including Payments, Security & Access and Platform Demo modules.

### Entrepreneur Panel dashbord
![Entrepreneur Dashboard](screeenshort/yasir001.png)

This view highlights the Entrepreneur dashboard with startup management, investor discovery, payment and document access.


### Investor Panel View (Deals Included)
![Entrepreneur Dashboard](screeenshort/dashbord0011.png)
This screenshot demonstrates the Investor dashboard, including portfolio access, startup discovery, payments and the Deals module.

### Security & Access Control
![Security Module](screeenshort/Security.png)

This screen represents the Security & Access module featuring password strength indicators, access-related settings and role-based UI control.

-------

##  Guided Walkthrough Screenshots (React Joyride)

---

### 1️ Welcome Popup – Dashboard Entry

**Description:**
A welcome popup appears as soon as the dashboard loads, introducing the user to the main dashboard area and the overall layout. This helps users quickly understand the interface and feel comfortable navigating the system.
![Welcome Popup – Dashboard Entry](screeenshort/aaa1.png)

---

### 2️ Sidebar Navigation Highlight

**Description:**
In this step, the guided tour highlights the sidebar and explains how users can navigate between different modules and sections using the sidebar menu. This ensures a clear and user-friendly navigation experience.
![Sidebar Navigation Highlight](screeenshort/bbb2.png)

---

### 3️ Navbar – Notifications & Profile

**Description:**
This step focuses on the top navigation bar, showing where users can access notifications, profile options and account-related settings. It helps users stay informed and manage their profile easily.
![Navbar – Notifications & Profile](screeenshort/ccc3.png)

---

### 4️ Main Content Area Overview

**Description:**
The final step highlights the main content area, explaining that this section is used to display core data, pages, reports and important dashboard information.
![Main Content Area Overview](screeenshort/ddd4.png)

---

###  What This Covers (Milestone 7 – Guided Walkthrough)

* Interactive dashboard onboarding experience
* Clear and step-by-step navigation guidance
* Professional, demo-ready UI walkthrough
* UI-only guided tour implemented using **React Joyride**

---

### Implementation Notes

* This walkthrough is UI-only and does not affect backend logic
* Designed for demos, presentations and first-time user onboarding
* Fully compatible with modern React dashboards

---

 **Note:**
This guided walkthrough enhances the user experience and helps new users understand the dashboard quickly and effectively.

---

### Implementation Notes
- Walkthrough is UI-only with no backend impact
- Designed for demos and first-time user onboarding
- Built using React Joyride for smooth step-by-step guidance

---
![Milestone 7 Status](https://img.shields.io/badge/Milestone%207-IN%20PROGRESS-blue?style=flat-square)

###  Milestone 7: Integration & Demo Preparation

###  Overview

Milestone 7 focuses on **final integration, testing, and demo preparation** of the Business Nexus frontend project. At this stage, all major UI modules are connected, walkthrough guidance is implemented, and the project is ready for presentation and evaluation.

---

###  What Was Completed

* All modules are now accessible through **main navigation & sidebar**
* **Role-based UI navigation** verified (Investor / Entrepreneur)
* **Responsive testing** across desktop and tablet views
* **Guided walkthrough** implemented using React Joyride
* Demo video recorded and published

---

###  Guided Walkthrough (React Joyride)

The walkthrough helps first-time users understand the dashboard layout:

1. Welcome popup on dashboard load
2. Sidebar navigation highlighted
3. Navbar actions (profile, notifications)
4. Main content area explanation

This improves usability and gives a professional onboarding experience.

---

###  Demo & Live Preview

* ▶️ **YouTube Demo Video:** *[YouTube  Video  link](https://youtu.be/WzJRw8mMFSk?si=AoCAHBS4iX0bNuTi)*
* 💼 **LinkedIn Demo Post:** *[LinkedIn Demo Post](https://www.linkedin.com/posts/yasirawan4831_frontenddevelopment-reactjs-typescript-activity-7412131972237496320-vBpq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFyt-1EB5XKMOcxukQpAzVmx6pIKiXdCz64)*
* 🌐 **Live Deployment (Vercel):** *Coming Soon*

---



---

## 🛠️ Technical Stack
- **Frontend:** React.js, Tailwind CSS
- **Routing:** React Router
- **Calendar:** FullCalendar
- **Tour Guide:** React Joyride
- **Icons:** Lucide React / Heroicons
- **Build Tool:** Vite

---

## 📁 Installation & Setup
```bash
# Clone the repository
git clone https://github.com/your-username/nexus-platform.git

# Navigate to project directory
cd nexus-platform

# Install dependencies
npm install

# Start development server
npm run dev
```
--------


### 📊 Project Status

![Status](https://img.shields.io/badge/Status-Completed-brightgreen.svg)
![Progress](https://img.shields.io/badge/Progress-98%25-success.svg)
![Frontend](https://img.shields.io/badge/Type-Frontend%20Project-blue.svg)


The project is **98%+ complete**, with all planned frontend milestones successfully delivered.

---

###  Acknowledgements

Special thanks to:

*Special thanks to **Developer Hub Corporation** for learning support and guidance.

---

### 📄 License

This project is licensed under the **MIT License**.

🔗 *License details will be added here.*


## Author
Muhhammad Yasir 
![GitHub](https://img.shields.io/badge/GitHub-YasirAwan4831-black?logo=github)
![LinkedIn](https://img.shields.io/badge/LinkedIn-Muhammad%20Yasir-blue?logo=linkedin)
![Email](https://img.shields.io/badge/Email-Contact%20Me-red?logo=gmail)

**Muhammad Yasir** <br>
GitHub: [https://github.com/YasirAwan4831](https://github.com/YasirAwan4831) <br>
LinkedIn: https://www.linkedin.com/in/yasirawan4831/ <br>
Email: [my3154831409@gmail.com](mailto:my3154831409@gmail.com)