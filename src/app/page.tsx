'use client';

// import Image from "next/image";
// import Button from "./components/Button";
// import LinkButton from "./components/Link";
// import TextLink from "./components/TextLink";
// import Form from "./components/Form";

// export default function Home() {
//   const formFields = [
//     { name: "email", type: "email", placeholder: "Enter your email", required: true },
//     { name: "password", type: "password", placeholder: "Enter your password", required: true },
//     { name: "username", type: "text", placeholder: "Enter your username", required: true },
//   ];

//   // Submit handler for the form
//   const handleFormSubmit = (formData: { [key: string]: string }) => {
//     console.log("Form submitted with data:", formData);

//   };

//   return (
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={180}
//           height={38}
//           priority
//         />
//         <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
//           <li className="mb-2">
//             Get started by editing{" "}
//             <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
//               src/app/page.tsx
//             </code>
//             .
//           </li>
//           <li>Save and see your changes instantly.</li>
//         </ol>

//         <Form onSubmit={handleFormSubmit} formFields={formFields} />

//         <div className="flex gap-4 items-center flex-col sm:flex-row">
//           <Button
//             label="Click Me"
//             onClick={() => alert("Button Clicked!")}
//             className="text-sm sm:text-base" // Optional styling for spacing
//           />
          
//           <LinkButton
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             label="Deploy now"
//             imageSrc="/vercel.svg"
//             imageAlt="Vercel logomark"
//             className="text-sm sm:text-base"
//           />
//           <LinkButton
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             label="Read our docs"
//             className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
//           />
//         </div>
//         <div className="flex gap-4 items-center flex-col">
//           <TextLink
//               href="/login"
//               label="Already have an account? Login"
//               className="mt-4"
//           />
//         </div>
        
//       </main>


//       <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/file.svg"
//             alt="File icon"
//             width={16}
//             height={16}
//           />
//           Learn
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/window.svg"
//             alt="Window icon"
//             width={16}
//             height={16}
//           />
//           Examples
//         </a>
//         <a
//           className="flex items-center gap-2 hover:underline hover:underline-offset-4"
//           href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <Image
//             aria-hidden
//             src="/globe.svg"
//             alt="Globe icon"
//             width={16}
//             height={16}
//           />
//           Go to nextjs.org →
//         </a>
//       </footer>
//     </div>
//   );
// }


import { LinkButton } from "./components/Button";

const LandingPage: React.FC = () => {
  const authPages = [
    { title: 'Sign Up', path: '/sign-up' },
    { title: 'Sign In', path: '/sign-in' },
    { title: 'Password Recovery', path: '/password-recovery' },
    { title: 'Two-Factor Authentication', path: '/2fa' },
    { title: 'Newsletter Subscription', path: '/newsletter' },
    { title: 'Admin Login', path: '/admin-login' },
    { title: 'Social Sign-In', path: '/social-sign-in' },
    { title: 'Employee Login', path: '/employee-login' },
    { title: 'Guest Checkout', path: '/guest-checkout' },
    { title: 'Account Settings', path: '/account-settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-3xl text-black font-semibold text-center mb-12">Choose an Authentication Form</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {authPages.map((page, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
              <div className="p-6">
                <h2 className="text-base font-semibold text-gray-800 mb-4">{page.title}</h2>
                <LinkButton
                  href={page.path}
                  label="Go to Form"  // Use label prop for static text
                  className=" text-xs w-full py-3 bg-cyan-950 text-white rounded-lg hover:bg-blue-700 transition-all duration-200"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
;