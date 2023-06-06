import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { WaitlistForm } from "@/components/WaitlistForm";
import { Label } from "@/components/ui/label";
import { useEffect, useRef } from "react";
import wordmarkLogo from "@/public/wordmark.png";
import { FacebookIcon, InstagramIcon, Mail, TwitterIcon } from "lucide-react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={`flex min-h-screen text-white flex-col py-12 items-center font-body justify-between px-2 md:px-8 ${inter.className}`}
      >
        <Head>
          <title>Punteer.com</title>
          <meta
            name="description"
            content="Punteer.com is the first and largest punters' social network in Africa"
          />
          <link rel="icon" href="/favicon.png" />
        </Head>
        <Image
          src={wordmarkLogo}
          className="w-[100px] md:w-[120px] mb-8 mx-auto"
          alt="Punteer Logo"
        />
        <div className="max-w-[540px] waitlist-card  bg-black/20 backdrop-blur-sm text-white rounded-sm  w-full px-8 p-12">
          <h1 className="mb-4 text-3xl font-semibold text-center md:text-4xl font-heading">
            Punteer is coming!
          </h1>
          <p className="my-4 text-sm text-center text-gray-300">
            Curious about the next big thing in social media? Secure your spot
            on our waitlist and be the first to explore our innovative platform!
          </p>
          <p className="my-4 mb-2 font-semibold text-center text-gray-200">
            <span className="text-green-400">2340</span> PEOPLE WAITING
          </p>
          {/* <WaitlistForm /> */}
          <form className="flex flex-col gap-2 mt-12">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                className="text-black rounded-sm bg-white/80"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <Label htmlFor="full-name">Full Name</Label>
              <Input
                className="text-black rounded-sm bg-white/80"
                id="full-name"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <Button variant={"default"} type="button" className="rounded-sm ">
              Join the waitlist
            </Button>

            <div className="flex flex-col gap-4 p-2 px-4 mx-auto text-xs font-semibold bg-white md:flex-row text-primary">
              <Link
                href="mailto:info@punteer.com"
                className="flex items-center gap-2"
              >
                <span className="p-1 border rounded-full border-secondary text-secondary">
                  <Mail size={14} />
                </span>
                <p>info@punteer.com</p>
              </Link>
              <div className="flex items-center gap-2">
                <span className="p-1 border rounded-full border-secondary text-secondary">
                  <FacebookIcon size={14} />
                </span>
                <span className="p-1 border rounded-full border-secondary text-secondary">
                  <InstagramIcon size={14} />
                </span>
                <span className="p-1 border rounded-full border-secondary text-secondary">
                  <TwitterIcon size={14} />
                </span>

                <p>mypunteer</p>
              </div>
            </div>
            {/* <div className="p-2 bg-white max-w-[420px] mx-auto w-full"></div> */}
          </form>
        </div>
      </main>
      <footer className="flex items-center justify-center gap-2 p-4 text-sm text-gray-700 bg-gray-100/80">
        <Image src={wordmarkLogo} className="w-[100px]" alt="Punteer Logo" />
        <p>© 2023 Punteer. All rights reserved</p>
      </footer>
    </>
  );
}
