"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const lightSrcs = ["/light1.png", "/light2.png", "/light3.png"];
  const darkSrcs = ["/dark1.png", "/dark2.png", "/dark3.png"];

  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <Badge variant="outline" className="text-sm py-2">
            <span className="mr-2 text-primary">
              <Badge>New</Badge>
            </span>
            <span>Now with GPT-5 support!</span>
          </Badge>

          <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1>
              Chat with AI directly in <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">Telegram</span>
            </h1>
          </div>

          <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
            Chat with <strong>ChatGPT</strong>, create stunning <strong>DALL-E 3</strong> images, and explore endless possibilities—all in one <strong>Telegram</strong> bot!
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button
              asChild
              className="w-5/6 md:w-1/4 font-bold group/arrow"
            >
              <Link href="https://t.me/GPToid_Bot?start=land">
                Get Started
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="https://github.com/kapxapot/aws-gpt-bot"
                target="_blank"
              >
                Github respository
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-14">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>

          <div className="grid grid-cols-3 gap-8">
            {lightSrcs.map((imgSrc, index) => (
              <Image
                width={540}
                height={848}
                className="w-full rounded-lg relative border border-t-2 border-secondary border-t-primary/30 dark:hidden"
                src={imgSrc}
                alt="GPToid screenshot"
                key={index}
                priority={true}
              />
            ))}

            {darkSrcs.map((imgSrc, index) => (
              <Image
                width={540}
                height={848}
                className="w-full rounded-lg relative border border-t-2 border-secondary border-t-primary/30 hidden dark:block"
                src={imgSrc}
                alt="GPToid screenshot"
                key={index}
                priority={true}
              />
            ))}
          </div>

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
