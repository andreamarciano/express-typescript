# ⚙️ Setup - TypeScript + Express

## 📦 Step 1: Initialize the Project

```bash
npm init -y
```

---

## 📚 Step 2: Install Dependencies

### Runtime dependencies

```bash
npm install express
```

### Development dependencies

```bash
npm install -D typescript ts-node @types/node @types/express nodemon
```

---

## ⚙️ Step 3: Configure TypeScript

Generate a TypeScript configuration file:

```bash
npx tsc --init
```

Update `tsconfig.json` with the following:

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "rootDir": "./src",
    "outDir": "./dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

---

## 🗂️ Step 4: Project Structure

```text
/firstProject
├── /dist                # Compiled JS output (auto-generated)
├── /node_modules        # Installed packages
├── /src                 # Source files
│   └── index.ts         # Main entry point
├── package.json
├── package-lock.json
├── tsconfig.json
```

---

## 🧠 Step 5: Create Entry File

**`src/index.ts`**

```ts
import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from TypeScript + Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
```

---

## 📝 Step 6: Update `package.json` Scripts

```json
"scripts": {
  "dev": "nodemon --watch src --exec ts-node src/index.ts"
}
```

---

## ▶️ Step 7: Run the Project

Use the following command to start the development server:

```bash
npm run dev
```

Expected terminal output:

```bash
[nodemon] starting `ts-node src/index.ts`
Server is running at http://localhost:3000
```
