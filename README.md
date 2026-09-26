# Krupa Sindhu Advertising & Software Pvt. Ltd.

> **Official Enterprise Portfolio Website & Training Portal**  
> Established: 2018 | Director: Vivek Dange | Certification: ISO 9001:2015 Certified  
> Office Address: Nandigram Housing Society, behind sharada nagar, Anand Nagar, Nanded, Maharashtra 431605  
> Email: [admin@krupasindhu.org.in](mailto:admin@krupasindhu.org.in) | Phone / WhatsApp: +91 7350570999

---

## Free 100% Production Hosting Guide

Follow this guide to deploy your entire full-stack project (Frontend + Backend + Database + Free Domain + SSL Certificate) for **100% FREE**.

### Recommended Free Stack:
1. **Cloud Database (Free Forever)**: **MongoDB Atlas** (`mongodb.com/atlas`) - Free 512MB M0 Cluster
2. **Backend API (Free Web Service)**: **Render** (`render.com`) - Free Node.js hosting with HTTPS SSL
3. **Frontend Website (Free Hosting & Custom Domain)**: **Vercel** (`vercel.com`) or **Render Static** - Free CDN hosting with custom subdomain (`krupasindhu.vercel.app`)

---

### STEP 1: Deploy Free Cloud Database (MongoDB Atlas)

1. Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register) and create a free account.
2. Click **Create a Deployment** -> Select **M0 Free Tier**.
3. Under **Database Access**, create a database username (e.g. `krupasindhu_admin`) and password.
4. Under **Network Access**, click **Add IP Address** -> Select **Allow Access from Anywhere** (`0.0.0.0/0`).
5. Click **Connect** -> Choose **Drivers (Node.js)**.
6. Copy your connection string, which will look like:
   ```
   mongodb+srv://krupasindhu_admin:<password>@cluster0.mongodb.net/krupasindhu?retryWrites=true&w=majority
   ```

---

### STEP 2: Deploy Free Backend Server (Render.com)

1. Push your project code to your **GitHub** account.
2. Sign up for free at [https://render.com](https://render.com).
3. Click **New +** -> Select **Web Service**.
4. Connect your GitHub repository.
5. Configure the Web Service:
   - **Root Directory**: `server`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Under **Environment Variables**, add:
   - `MONGODB_URI` = *(Your MongoDB Atlas connection string from Step 1)*
   - `GEMINI_API_KEY` = *(Your Google Gemini API key)*
   - `NODE_ENV` = `production`
   - `CLIENT_URL` = *(Your Vercel frontend URL from Step 3)*
7. Click **Create Web Service**. Render will deploy your backend and give you a free live HTTPS backend URL, for example:
   ```
   https://krupasindhu-backend.onrender.com
   ```

---

### STEP 3: Deploy Free Frontend Website (Vercel.com)

1. Sign up for free at [https://vercel.com](https://vercel.com).
2. Click **Add New...** -> **Project** -> Import your GitHub repository.
3. Select the `client` directory:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Under **Environment Variables**, add (or configure API proxy):
   - `VITE_API_URL` = `https://krupasindhu-backend.onrender.com`
5. Click **Deploy**. Vercel will build your website and generate a free live domain with SSL, for example:
   ```
   https://krupasindhu.vercel.app
   ```

---

### STEP 4: Seed Cloud Database

Once your backend is live on Render, open your browser and navigate to your **Database Inspector**:
```
https://krupasindhu.vercel.app/admin
```
Click **Re-Seed Database** to automatically populate your live MongoDB Atlas cloud database with the official 7 team members, services, internships, products, and corporate address!

---

## Local Development Quick Commands

```bash
# Start Backend Server (Port 5000)
cd server
npm start

# Start Frontend Dev App (Port 5173 / 5174)
cd client
npm run dev

# Seed Database
cd server
npm run seed
```
