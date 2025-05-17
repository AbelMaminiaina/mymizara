Project in react+vite and tailwindcss 
framework typescript

follows a Clean Architecture-inspired structure
to consume APIs for the entities:

User
Role
Project
Contact

my-app/
├── public/
├── src/
│   ├── api/               # API client layer (fetch/axios)
│   │   ├── contact.api.ts
│   │   ├── project.api.ts
│   │   ├── role.api.ts
│   │   └── user.api.ts
│   ├── models/            # Domain models (interfaces)
│   │   ├── contact.ts
│   │   ├── project.ts
│   │   ├── role.ts
│   │   └── user.ts
│   ├── services/          # Application logic, hooks
│   │   ├── useContacts.ts
│   │   ├── useProjects.ts
│   │   ├── useRoles.ts
│   │   └── useUsers.ts
│   ├── components/        # UI components
│   │   ├── ContactList.tsx
│   │   ├── ProjectList.tsx
│   │   ├── RoleList.tsx
│   │   └── UserList.tsx
│   ├── pages/             # Route-level pages
│   │   ├── ContactsPage.tsx
│   │   ├── ProjectsPage.tsx
│   │   ├── RolesPage.tsx
│   │   └── UsersPage.tsx
│   ├── App.tsx
│   └── main.tsx
├── tsconfig.json
├── package.json


install Slide : npm install react-slick slick-carousel
npm install --save-dev @types/react-slick