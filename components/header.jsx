// "use client";

// import React from "react";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "./ui/button";
// import { LayoutDashboard } from "lucide-react";

// const Header = () => {
//   return (
//      <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between"> 
//         <Link href="/">
//           <Image
//             src={"/logo.png"}
//             alt="Sensai Logo"
//             width={200}
//             height={60}
//             className="h-12 py-1 w-auto object-contain"
//           />
//         </Link>
//     <div className="flex items-center space-x-2 md:space-x-4">
//           <SignedIn>
//              <Link href="/dashboard">
//                <Button
//                  variant="outline"
//                  className="hidden md:inline-flex items-center gap-2"
//                >
//                  <LayoutDashboard className="h-4 w-4" />
//                  Industry Insights
//                </Button></Link>
//                </SignedIn>

//                 <DropdownMenu>
//                <DropdownMenuTrigger asChild>
//                  <Button className="flex items-center gap-2">
//                    <StarsIcon className="h-4 w-4" />
//                    <span className="hidden md:block">Growth Tools</span>
//                    <ChevronDown className="h-4 w-4" />
//                  </Button>
//                </DropdownMenuTrigger>
//                <DropdownMenuContent align="end" className="w-48">
//                  <DropdownMenuItem asChild>
//                    <Link href="/resume" className="flex items-center gap-2">
//                      <FileText className="h-4 w-4" />
//                      Build Resume
//                    </Link>
//                  </DropdownMenuItem>
//                  <DropdownMenuItem asChild>
//                    <Link
//                      href="/ai-cover-letter"
//                      className="flex items-center gap-2"
//                    >
//                      <PenBox className="h-4 w-4" />
//                      Cover Letter
//                    </Link>
//                  </DropdownMenuItem>
//                  <DropdownMenuItem asChild>
//                    <Link href="/interview" className="flex items-center gap-2">
//                      <GraduationCap className="h-4 w-4" />
//                      Interview Prep
//                    </Link>
//                  </DropdownMenuItem>

//                </DropdownMenuContent>
//           </DropdownMenu>

// <SignedOut>
//         <SignInButton mode="modal">
//           <button>Sign in</button>
//         </SignInButton>
//       </SignedOut>

//       <SignedIn>
//         <UserButton />
//       </SignedIn>

//     </div>
//     </nav>
//       <header/>
//    </header>
//   );
// };

// export default Header;




// import React from "react";
// import { Button } from "./ui/button";
// import {
//   PenBox,
//   LayoutDashboard,
//   FileText,
//   GraduationCap,
//   ChevronDown,
//   StarsIcon,
// } from "lucide-react";
// import Link from "next/link";
// import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import Image from "next/image";
// import { checkUser } from "@/lib/checkUser";

// export default async function Header() {
//   await checkUser();

//   return (
//     <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
//       <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
//         <Link href="/">
//           <Image
//             src={"/logof.jpg"}
//             alt="Sensai Logo"
//             width={200}
//             height={200}
//             // className="h-12 py-1 w-auto object-contain"
//           />
//         </Link>

//         {/* Action Buttons */}
//         <div className="flex items-center space-x-2 md:space-x-4">
//           <SignedIn>
//             <Link href="/dashboard">
//               <Button
//                 variant="outline"
//                 className="hidden md:inline-flex items-center gap-2"
//               >
//                 <LayoutDashboard className="h-4 w-4" />
//                 Industry Insights
//               </Button>
//               <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
//                 <LayoutDashboard className="h-4 w-4" />
//               </Button>
//             </Link>

//             {/* Growth Tools Dropdown */}
//             <DropdownMenu>
//               <DropdownMenuTrigger asChild>
//                 <Button className="flex items-center gap-2">
//                   <StarsIcon className="h-4 w-4" />
//                   <span className="hidden md:block">Growth Tools</span>
//                   <ChevronDown className="h-4 w-4" />
//                 </Button>
//               </DropdownMenuTrigger>
//               <DropdownMenuContent align="end" className="w-48">
//                 <DropdownMenuItem asChild>
//                   <Link href="/resume" className="flex items-center gap-2">
//                     <FileText className="h-4 w-4" />
//                     Build Resume
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link
//                     href="/ai-cover-letter"
//                     className="flex items-center gap-2"
//                   >
//                     <PenBox className="h-4 w-4" />
//                     Cover Letter
//                   </Link>
//                 </DropdownMenuItem>
//                 <DropdownMenuItem asChild>
//                   <Link href="/interview" className="flex items-center gap-2">
//                     <GraduationCap className="h-4 w-4" />
//                     Interview Prep
//                   </Link>
//                 </DropdownMenuItem>
//               </DropdownMenuContent>
//             </DropdownMenu>
//           </SignedIn>

//           <SignedOut>
//             <SignInButton>
//               <Button variant="outline">Sign In</Button>
//             </SignInButton>
//           </SignedOut>

//           <SignedIn>
//             <UserButton
//               appearance={{
//                 elements: {
//                   avatarBox: "w-10 h-10",
//                   userButtonPopoverCard: "shadow-xl",
//                   userPreviewMainIdentifier: "font-semibold",
//                 },
//               }}
//               afterSignOutUrl="/"
//             />
//           </SignedIn>
//         </div>
//       </nav>
//     </header>
//   );
// }
"use client";

import React from "react";
import { Button } from "./ui/button";
import {
  PenBox,
  LayoutDashboard,
  FileText,
  GraduationCap,
  ChevronDown,
  StarsIcon,
} from "lucide-react";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

// Radix UI Dropdown imports
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";

const {
  Root: DropdownMenu,
  Trigger: DropdownMenuTrigger,
  Content: DropdownMenuContent,
  Item: DropdownMenuItem,
  Portal: DropdownMenuPortal,
} = DropdownMenuPrimitive;

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b bg-background z-50">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src={"/logof.jpg"}
            alt="Sensai Logo"
            width={170}
            height={200}
          />
        </Link>

        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href="/dashboard">
              <Button
                variant="outline"
                className="hidden md:inline-flex items-center gap-2"
              >
                <LayoutDashboard className="h-4 w-4" />
                Industry Insights
              </Button>
              <Button variant="ghost" className="md:hidden w-10 h-10 p-0">
                <LayoutDashboard className="h-4 w-4" />
              </Button>
            </Link>

            {/* ✅ Growth Tools Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="flex items-center gap-2">
                  <StarsIcon className="h-4 w-4" />
                  <span className="hidden md:block">Growth Tools</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>

              {/* ✅ IMPORTANT FIX */}
              <DropdownMenuPortal>
                <DropdownMenuContent
                  sideOffset={8}
                  align="end"
                  className="z-[9999] w-48 bg-background border border-gray-700 rounded-md shadow-xl"
                >
                  <DropdownMenuItem asChild>
                    <Link href="/resume" className="flex items-center gap-2 px-3 py-2">
                      <FileText className="h-4 w-4" />
                      Build Resume
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/ai-cover-letter" className="flex items-center gap-2 px-3 py-2">
                      <PenBox className="h-4 w-4" />
                      Cover Letter
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link href="/interview" className="flex items-center gap-2 px-3 py-2">
                      <GraduationCap className="h-4 w-4" />
                      Interview Prep
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenuPortal>
            </DropdownMenu>
          </SignedIn>

          <SignedOut>
            <SignInButton>
              <Button variant="outline">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-10 h-10",
                  userButtonPopoverCard: "shadow-xl",
                  userPreviewMainIdentifier: "font-semibold",
                },
              }}
              afterSignOutUrl="/"
            />
          </SignedIn>
        </div>
      </nav>
    </header>
  );
}

