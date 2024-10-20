import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeartIcon, Instagram, MessagesSquareIcon, RssIcon } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center gap-5">
                <MessagesSquareIcon
                  className="size-20"
                />
                <div>
                  Join <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">GPToid</span> community!
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              You can find the latest GPToid announcements in our Telegram channel. Everyone is welcome to our fan club in Telegram where you always can ask questions or propose ideas. We also post some of DALL-E creations using GPToid on Instagram.
            </CardContent>

            <CardFooter className="flex flex-wrap justify-center gap-4">
              <Button asChild>
                <a href="https://t.me/GPToid" target="_blank" className="flex gap-2">
                  <RssIcon />
                  Join News Channel
                </a>
              </Button>

              <Button asChild>
                <a href="https://t.me/GPToidFanClub" target="_blank" className="flex gap-2">
                  <HeartIcon />
                  Join Fan Club
                </a>
              </Button>

              <Button asChild>
                <a href="https://instagram.com/gptoid_bot" target="_blank" className="flex gap-2">
                  <Instagram />
                  Follow on Instagram
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};
