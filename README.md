
# NestJS OAuth2 🔐

A simple authentication project using **NestJS** and **OAuth2** with **Google** and **Facebook** providers. It uses **Passport.js** strategies and manages user sessions via **express-session**.

---

## 🚀 Features

- ✅ OAuth2 login via Google and Facebook
- ✅ Session-based authentication using express-session
- ✅ Passport strategy integration
- ✅ Clean project structure for easy extension

---

## 📦 Requirements

- Node.js v14+
- npm
- Google & Facebook OAuth credentials
- PostgreSQL database

---

## 📁 Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/3laaElsadany/NestJS_Oauth.git
   cd NestJS_Oauth
   ```

2. Create a `.env` file in the root directory and add your credentials as shown below:
   ```env
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   GOOGLE_CB=your_google_client_callback_url

   FACEBOOK_CLIENT_ID=your_facebook_client_id
   FACEBOOK_CLIENT_SECRET=your_facebook_client_secret
   FACEBOOK_CB=your_facebook_client_callback_url

   SESSION_SECRET=your_session_secret

   DB_DIALECT=postgres
   DB_HOST=localhost
   DB_PORT=your_db_port
   DB_USERNAME=your_db_username
   DB_PASSWORD=your_db_password
   DB_DBNAME=your_db_name
   ```

---

## 📦 Install Dependencies

```bash
npm install
```

---

## ▶️ Run the App

```bash
npm run start:dev
```

---

## 🔑 Authentication Routes

### Google

- `GET /auth/google` – Redirects to Google OAuth login
- `GET /auth/google/cb` – OAuth callback that handles login and session creation

### Facebook

- `GET /auth/facebook` – Redirects to Facebook OAuth login
- `GET /auth/facebook/cb` – OAuth callback that handles login and session creation

---
