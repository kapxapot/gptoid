import Copyright from "@/components/copyright";
import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import XIcon from "@/components/icons/x-icon";
import { Separator } from "@/components/ui/separator";
import { BotIcon, HeartIcon, Instagram, RssIcon, SendIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const baseYear = 2024;
const now = new Date();
const year = now.getFullYear();

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              {/* <ChevronsDownIcon className="w-9 h-9 mr-2 bg-gradient-to-tr from-primary via-primary/70 to-primary rounded-lg border border-secondary" /> */}
              <Image
                alt="GPToid Logo"
                src="/gptoid-logo.svg"
                className="size-9"
                width={100}
                height={100}
              />

              <h3 className="text-2xl">GPToid</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>

            <Link href="https://t.me/kapxapot" target="_blank" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <SendIcon />
              Telegram
            </Link>

            <Link href="https://instagram.com/gptoid_bot" target="_blank" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <Instagram />
              Instagram
            </Link>

            <Link href="https://x.com/kapxapot" target="_blank" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <XIcon className="size-6" />
              X
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Resources</h3>

            <Link href="https://t.me/GPToid_Bot" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <BotIcon />
              Bot
            </Link>

            <Link href="https://t.me/GPToid" target="_blank" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <RssIcon />
              News
            </Link>

            <Link href="https://t.me/GPToidFanClub" target="_blank" className="opacity-60 hover:opacity-100 flex flex-shrink-0 gap-2">
              <HeartIcon />
              Fan Club
            </Link>
          </div>
        </div>

        <Separator className="my-6" />

        <section>
          <h3 className="mb-4">
            <Copyright baseYear={2024} name="GPToid" />
          </h3>

          <h3 className="mb-1 flex flex-wrap gap-x-2">
            <div>Created by</div>
            <Link
              target="_blank"
              href="https://github.com/kapxapot"
              className="text-primary transition-all border-primary hover:border-b-2"
            >
              Sergey Atroshchenko
            </Link>
            <div className="flex gap-2">
              <Link href="https://www.linkedin.com/in/sergey-atroshchenko" target="_blank">
                <LinkedInIcon />
              </Link>

              <Link href="https://github.com/kapxapot" target="_blank">
                <GithubIcon />
              </Link>

              <Link href="https://x.com/kapxapot" target="_blank">
                <XIcon />
              </Link>
            </div>
          </h3>

          <h3 className="opacity-60 mt-4 sm:mt-0">
            Original design by
            <Link
              target="_blank"
              href="https://github.com/leoMirandaa"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Leo Miranda
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
